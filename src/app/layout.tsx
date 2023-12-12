import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Layout comum a todos</h1>
        {children}
      </body>
    </html>
  )
}
