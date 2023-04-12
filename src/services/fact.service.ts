export interface Fact {
  id: string
  content: string
  createdAt: Date
  updatedAt: Date
}

const delay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const fetchFacts = async (options?: RequestInit): Promise<Fact[]> => {
  // eslint-disable-next-line no-console
  console.log('~~~~~~~~~~~~~ fetching facts ~~~~~~~~~~~~~')

  await delay(2500)

  const response = await fetch(`${process.env.API_BASE_URL}/facts`, options)
  return response.json()
}

export const fetchFactById = async (
  id: string,
  options?: RequestInit,
): Promise<Fact> => {
  // eslint-disable-next-line no-console
  console.log('~~~~~~~~~~~~~ fetching fact by id ~~~~~~~~~~~~~')
  const response = await fetch(
    `${process.env.API_BASE_URL}/facts/${id}`,
    options,
  )
  return response.json()
}

export const fetchRandomFact = async (options?: RequestInit): Promise<Fact> => {
  // eslint-disable-next-line no-console
  console.log('~~~~~~~~~~~~~ fetching random fact ~~~~~~~~~~~~~')
  const response = await fetch(
    `${process.env.API_BASE_URL}/facts/random`,
    options,
  )
  return response.json()
}
