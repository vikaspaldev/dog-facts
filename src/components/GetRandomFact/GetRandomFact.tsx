'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export interface GetRandomFactProps {}

const GetRandomFact: React.FC<GetRandomFactProps> = () => {
  const { refresh } = useRouter()

  const handleClick = () => {
    refresh()
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Get Random Fact
      </button>
    </div>
  )
}

export default GetRandomFact
