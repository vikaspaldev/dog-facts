/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  fetchDogBreeds,
  fetchDogSubBreedByBreed,
  fetchDogSubBreedImage,
} from '@/services/dog.service'
import { Suspense } from 'react'
import Link from 'next/link'
import DogImage from '../DogImage'

interface DogBreedDetailsPageProps {
  params: { breed: string }
}

export default async function DogBreedDetailsPage({
  params: { breed },
}: DogBreedDetailsPageProps) {
  const subBreeds = await fetchDogSubBreedByBreed(breed)
  return (
    <div className="p-20">
      <h1 className="mb-4 text-4xl font-medium">
        <Link href="/dogs" className="text-blue-500 hover:underline">
          Dogs
        </Link>
        {' > '}
        {breed}
      </h1>

      <ul className="flex flex-wrap gap-x-3 gap-y-4">
        {subBreeds.length > 0 &&
          subBreeds.map(subBreed => (
            <li key={subBreed} className="mb-2 rounded-lg">
              <Link href={`/dogs/${breed}/${subBreed}`}>
                <Suspense fallback={<div>Loading...</div>}>
                  {/* @ts-ignore */}
                  <DogImage
                    breed={subBreed}
                    imagePromise={fetchDogSubBreedImage(breed, subBreed)}
                  />
                </Suspense>
              </Link>
              <div className="mt-2 text-lg">{subBreed}</div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export async function generateStaticParams() {
  const dogBreeds = await fetchDogBreeds()
  const paths = dogBreeds.map(breed => ({
    breed: breed.breed,
  }))
  return paths
}
