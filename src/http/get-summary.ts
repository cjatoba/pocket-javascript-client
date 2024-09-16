import type { SummaryResponse } from '../types'

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}
