import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { Plus } from 'lucide-react'
import { getSummary } from '../http/get-summary.ts'
import { GoalsPerDay } from './goals-per-day.tsx'
import { InOrbitIcon } from './in-orbit-icon.tsx'
import { PendingGoals } from './pending-goals.tsx'
import { Button } from './ui/button.tsx'
import { DialogTrigger } from './ui/dialog.tsx'
import { Progress, ProgressIndicator } from './ui/progress-bar.tsx'
import { Separator } from './ui/separator.tsx'

dayjs.locale(ptBR)

export const Summary = () => {
  const { data: summary } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  if (!summary) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round(
    (summary?.completed * 100) / summary?.total
  )

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={summary?.completed} max={summary?.total}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{summary?.completed}</span> de{' '}
            <span className="text-zinc-100">{summary?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <GoalsPerDay />
      </div>
    </div>
  )
}
