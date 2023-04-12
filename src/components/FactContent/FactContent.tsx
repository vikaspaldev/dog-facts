import { Fact } from '@/services/fact.service'
import clsx from 'clsx'
import { Satisfy } from 'next/font/google'
import React from 'react'

const satisfyFont = Satisfy({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export interface FactContentProps {
  fact: Fact
  children?: React.ReactNode
}

const FactContent: React.FC<FactContentProps> = ({ fact, children }) => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center px-20">
      <div
        className={clsx(
          satisfyFont.className,
          'h-auto text-6xl leading-normal',
        )}
      >
        {fact.content}
      </div>

      <div className="mt-4 h-auto">{children}</div>
    </div>
  )
}

export default FactContent
