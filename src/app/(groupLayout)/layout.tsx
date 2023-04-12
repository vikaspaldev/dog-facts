import React from 'react'

export interface GroupLayoutProps {
  children: React.ReactNode
}

const GroupLayout: React.FC<GroupLayoutProps> = ({ children }) => {
  return (
    <div className="m-20 flex min-h-[85vh] flex-col items-center justify-center rounded-lg border border-dashed border-green-600 p-10">
      <h2 className="text-3xl font-medium">Group Layout</h2>
      <div className="mt-4 flex w-full flex-grow">{children}</div>
    </div>
  )
}

export default GroupLayout
