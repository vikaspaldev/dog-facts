import FactContent from '@/components/FactContent/FactContent'
import { fetchFactById, fetchFacts } from '@/services/fact.service'
import { redirect } from 'next/navigation'

export interface FactDetailPageProps {
  params: { id: string }
}

export default async function FactDetailPage({
  params: { id },
}: FactDetailPageProps) {
  const fact = await fetchFactById(id)

  if (!('id' in fact)) {
    redirect('/facts')
  }

  return <FactContent fact={fact} />
}

export async function generateStaticParams() {
  const facts = await fetchFacts({ next: { revalidate: 10 } })
  return facts.map(fact => ({
    id: fact.id,
  }))
}
