export const deleteGoalCompletion = async (
  goalCompletionsId: string
): Promise<void> => {
  await fetch('http://localhost:3333/completions', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalCompletionsId,
    }),
  })
}
