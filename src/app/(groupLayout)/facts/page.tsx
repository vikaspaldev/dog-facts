import { fetchFacts } from '@/services/fact.service'
import FactList from '@/components/FactList/FactList'

export default async function FactListPage() {
  const facts = await fetchFacts()

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-2xl font-bold">Facts</h2>

      <FactList facts={facts} />
    </div>
  )
}
