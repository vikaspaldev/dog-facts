import FactContent from '@/components/FactContent/FactContent'
import GetRandomFact from '@/components/GetRandomFact/GetRandomFact'
import { fetchRandomFact } from '@/services/fact.service'
import React from 'react'

export interface RandomFactPageProps {}

export default async function RandomFactPage() {
  const fact = await fetchRandomFact({
    cache: 'no-store',
    // next: { revalidate: 1 },
  })

  return (
    <div className="m-10 h-auto w-full rounded-lg border border-dashed border-orange-600 p-10">
      <h1 className="text-2xl font-bold">Random Dog Fact</h1>

      <FactContent fact={fact}>
        <GetRandomFact />
      </FactContent>
    </div>
  )
}

// export const dynamic = 'force-dynamic'
