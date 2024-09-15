import { CreateGoal } from './components/create-goal.tsx'
import { Summary } from './components/summary.tsx'
// import { EmptyGoals } from './components/empty-goals.tsx'
import { Dialog } from './components/ui/dialog.tsx'

export const App = () => {
  return (
    <Dialog>
      {/*<EmptyGoals />*/}

      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
