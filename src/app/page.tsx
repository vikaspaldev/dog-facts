import clsx from 'clsx'
import { Satisfy } from 'next/font/google'
import React from 'react'

const satisfyFont = Satisfy({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1
        className={clsx(
          satisfyFont.className,
          'my-2 text-center text-8xl font-bold',
        )}
      >
        Dog Facts 🐕
      </h1>
    </main>
  )
}

export default HomePage
