import { useMutation, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { CheckCircle2 } from 'lucide-react'
import { deleteGoalCompletion } from '../http/delete-goal-completion.ts'
import type { SummaryResponse } from '../types'

export const GoalsPerDay = () => {
  const queryClient = useQueryClient()
  const goalsPerDay = queryClient.getQueryData<SummaryResponse>([
    'summary',
  ])?.goalsPerDay

  const { mutateAsync: deleteGoalCompletionMutate } = useMutation({
    mutationFn: deleteGoalCompletion,
  })
  const handleUndo = async (goalCompletionsId: string) => {
    await deleteGoalCompletionMutate(goalCompletionsId)

    await queryClient.invalidateQueries({ queryKey: ['summary'] })
    await queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  const goalsPerDayArray = goalsPerDay && Object.entries(goalsPerDay)

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">Sua semana</h2>

      {goalsPerDayArray?.map(([date, goals]) => {
        const weekDay = dayjs(date).format('dddd')
        const formattedDate = dayjs(date).format('D[ de ]MMMM')

        return (
          <div key={date} className="flex flex-col gap-4">
            <h3 className="font-medium">
              <span className="capitalize">{weekDay}</span>{' '}
              <span className="text-zinc-400 text-xs">({formattedDate})</span>
            </h3>

            <ul className="flex flex-col gap-3">
              {goals.map(goal => {
                const time = dayjs(goal.completedAt).format('HH:mm')

                return (
                  <li key={goal.id} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-pink-500" />
                    <span className="text-sm text-zinc-400">
                      Você completou “
                      <span className="text-zinc-100">{goal.title}</span>” às{' '}
                      <span className="text-zinc-100">{time}h</span>
                      <button
                        type="button"
                        onClick={() => handleUndo(goal.id)}
                        className="ml-2 text-xs text-zinc-500 underline underline-offset-2"
                      >
                        Desfazer
                      </button>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
