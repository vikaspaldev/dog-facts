import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Fact list (SSG)',
    href: '/facts',
  },
  {
    title: 'Random Fact (SSR)',
    href: '/random',
    prefetch: false,
  },
  {
    title: 'Dog Photos',
    href: '/dogs',
  },
]

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div
      className={clsx(
        'fixed bottom-0 top-0 z-auto flex h-auto w-32 flex-col justify-center border-r border-gray-800 bg-gray-900 md:w-72',
      )}
    >
      <div className="h-auto overflow-y-auto px-3 py-4">
        <ul className="space-y-2 font-medium">
          {navItems.map(item => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center rounded-lg p-2 text-white hover:bg-gray-700"
                {...('prefetch' in item && { prefetch: item.prefetch })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
