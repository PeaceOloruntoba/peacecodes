import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peace Oloruntoba - Software Engineer',
  description: 'Peace Oloruntoba is a software developer, and an aspiring Software Engineer, with over 2 years of experience in web, and mobile development, with over 10 web projects, and over 2 mobile apps completed, Peace has honed his special skills that makes him unique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
