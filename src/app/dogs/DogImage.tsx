import clsx from 'clsx'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export interface DogImageProps {
  breed: string
  imagePromise: Promise<string>
  nonClickable?: boolean
}

export default async function DogImage({
  breed,
  imagePromise,
  nonClickable,
}: DogImageProps) {
  const dogImage = await imagePromise
  const { base64 } = await getPlaiceholder(dogImage)

  return (
    <div style={{ width: 200, height: 200 }} className="relative">
      <Image
        src={dogImage}
        alt={breed}
        fill
        sizes="10vw"
        className={clsx(
          'h-auto w-auto rounded-lg object-cover',
          !nonClickable &&
            'cursor-pointer transition-opacity duration-300 hover:scale-105 hover:opacity-75',
        )}
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  )
}
