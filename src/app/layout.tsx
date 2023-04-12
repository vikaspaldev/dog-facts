import clsx from 'clsx'
import { Roboto } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import '../styles/globals.css'

export const metadata = {
  title: 'Dog Facts',
  description: 'Dog Fact App built on Next.js + TypeScript with Tailwind CSS',
}

const robotoFont = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(robotoFont.className, `bg-gray-900 text-white`)}>
        <NavBar />

        <div className="h-auto pl-72">{children}</div>
      </body>
    </html>
  )
}
