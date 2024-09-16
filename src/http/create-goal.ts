interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> => {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}
