import React from 'react'

export interface FactsLayoutProps {
  children: React.ReactNode
}

const FactsLayout: React.FC<FactsLayoutProps> = ({ children }) => {
  return (
    <div className="m-10 h-auto w-full rounded-lg border border-dashed border-orange-600 p-10">
      <h1 className="text-2xl font-bold">FactsLayout</h1>

      <div className="">{children}</div>
    </div>
  )
}

export default FactsLayout
