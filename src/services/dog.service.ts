const baseUrl = 'https://dog.ceo/api'

const MAX_PHOTO_COUNT = 27

export interface AllDogBreedResponse {
  breed: string
  subBreeds: string[]
}

export const fetchDogBreeds = async () => {
  const data = await fetch(`${baseUrl}/breeds/list/all`).then(
    r => r.json() as Promise<{ message: Record<string, string[]> }>,
  )
  const result = Object.keys(data.message)
    .filter(b => data.message[b].length > 0)
    .map(breed => ({
      breed,
      subBreeds: data.message[breed],
    }))
    .slice(0, MAX_PHOTO_COUNT)
  return result as AllDogBreedResponse[]
}

export const fetchDogImage = async (breed: string) => {
  const data = await fetch(`${baseUrl}/breed/${breed}/images/random`).then(
    r => r.json() as Promise<{ message: string }>,
  )
  return data.message
}

export const fetchDogSubBreedImage = async (
  breed: string,
  subBreed: string,
) => {
  const data = await fetch(
    `${baseUrl}/breed/${breed}/${subBreed}/images/random`,
  ).then(r => r.json() as Promise<{ message: string }>)
  return data.message
}

export const fetchDogSubBreedByBreed = async (breed: string) => {
  const allBreeds = await fetchDogBreeds()
  const result = allBreeds.find(b => b.breed === breed)
  return (result?.subBreeds || []).slice(0, MAX_PHOTO_COUNT)
}

export const fetchSubBreedImages = async (breed: string, subBreed: string) => {
  const data = await fetch(`${baseUrl}/breed/${breed}/${subBreed}/images`).then(
    r => r.json() as Promise<{ message: string[] }>,
  )
  return data.message.slice(0, MAX_PHOTO_COUNT)
}
