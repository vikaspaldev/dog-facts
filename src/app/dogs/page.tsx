/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fetchDogBreeds, fetchDogImage } from '@/services/dog.service'
import { Suspense } from 'react'
import Link from 'next/link'
import DogImage from './DogImage'

export default async function DogsPage() {
  const dogBreeds = await fetchDogBreeds()
  return (
    <div className="p-20">
      <h1 className="mb-4 text-4xl font-medium">Dogs</h1>

      <ul className="flex flex-wrap gap-x-3 gap-y-4">
        {dogBreeds.map(breed => (
          <li key={breed.breed} className="mb-2 rounded-lg">
            <Link href={`/dogs/${breed.breed}`}>
              <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-ignore */}
                <DogImage
                  breed={breed.breed}
                  imagePromise={fetchDogImage(breed.breed)}
                />
              </Suspense>
            </Link>

            <div className="mt-2 text-lg">{breed.breed}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
