export type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay
}

export type GoalsPerDay = Record<
  string,
  { id: string; title: string; completedAt: string }[]
>
