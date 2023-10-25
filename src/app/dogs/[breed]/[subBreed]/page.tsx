/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fetchSubBreedImages } from '@/services/dog.service'
import { Suspense } from 'react'
import Link from 'next/link'
import { generateUniqueString } from '@/services/generateUniqueString'
import DogImage from '../../DogImage'

interface DogSubBreedDetailsPageProps {
  params: { breed: string; subBreed: string }
}

export default async function DogSubBreedDetailsPage({
  params: { breed, subBreed },
}: DogSubBreedDetailsPageProps) {
  const subBreedImages = await fetchSubBreedImages(breed, subBreed)
  return (
    <div className="p-20">
      <h1 className="mb-4 text-4xl font-medium">
        <Link href="/dogs" className="text-blue-500 hover:underline">
          Dogs
        </Link>
        {' > '}
        <Link href={`/dogs/${breed}`} className="text-blue-500 hover:underline">
          {breed}
        </Link>
        {' > '}
        {subBreed}
      </h1>

      <ul className="flex flex-wrap gap-x-3 gap-y-4">
        {subBreedImages.length > 0 &&
          subBreedImages.map(subBreedImage => (
            <li key={generateUniqueString()} className="mb-2 rounded-lg">
              <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-ignore */}
                <DogImage
                  breed={subBreed}
                  imagePromise={Promise.resolve(subBreedImage)}
                  nonClickable
                />
              </Suspense>
            </li>
          ))}
      </ul>
    </div>
  )
}
