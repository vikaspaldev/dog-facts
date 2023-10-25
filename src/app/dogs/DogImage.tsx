import { getPlaiceholder } from 'plaiceholder'
import RenderImage from './RenderImage'

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
      <RenderImage
        src={dogImage}
        breed={breed}
        blurDataURL={base64}
        nonClickable={nonClickable}
      />
    </div>
  )
}
