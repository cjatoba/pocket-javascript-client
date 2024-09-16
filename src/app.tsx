import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal.tsx'
import { EmptyGoals } from './components/empty-goals.tsx'
import { Summary } from './components/summary.tsx'
import { Dialog } from './components/ui/dialog.tsx'
import { getSummary } from './http/get-summary.ts'

export const App = () => {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
