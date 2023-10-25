'use client'

import { ImageModal } from '@/components/ImageModal/ImageModal'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export interface RenderImageProps {
  src: string
  breed: string
  blurDataURL: string
  nonClickable?: boolean
}
export default function RenderImage({
  src,
  breed,
  blurDataURL,
  nonClickable,
}: RenderImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }
  const closeImageModal = () => {
    setSelectedImage(null)
  }
  return (
    <>
      <Image
        src={src}
        alt={breed}
        fill
        sizes="10vw"
        className={clsx(
          'h-auto w-auto cursor-pointer rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:opacity-75',
        )}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onClick={() => openImageModal(src)}
      />
      {nonClickable && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeImageModal} />
      )}
    </>
  )
}
