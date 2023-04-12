import { Fact } from '@/services/fact.service'
import Link from 'next/link'
import React from 'react'

export interface FactListProps {
  facts: Fact[]
}

const FactList: React.FC<FactListProps> = ({ facts }) => {
  return (
    <ul className="list-outside list-disc">
      {facts.map(fact => (
        <li key={fact.id} className="mb-4">
          <Link href={`/facts/${fact.id}`} className="block text-blue-500">
            {fact.content}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FactList
