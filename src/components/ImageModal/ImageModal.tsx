import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

export interface ImageModalProps {
  image: string
  onClose: () => void
}

export const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({
  image,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleCloseModal = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal)
    return () => {
      document.removeEventListener('mousedown', handleCloseModal)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/50">
      <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-4 text-white"
          aria-label="Close modal"
        >
          <span className="text-3xl font-bold md:text-5xl">&times;</span>
        </button>
        <div
          ref={modalRef}
          className="modal-content fixed m-auto flex h-auto w-[90%] items-center justify-center overflow-hidden shadow-lg md:w-[60%]"
        >
          <Image
            width={400}
            height={400}
            src={image}
            alt={image}
            className="w-full rounded-lg object-cover md:w-[80%]"
          />
        </div>
      </div>
    </div>
  )
}
