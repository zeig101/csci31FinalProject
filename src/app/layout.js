import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Theme } from '@radix-ui/themes'

import './globals.css'
import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Duncan's Website",
  description: 'A website made for class.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Theme>
        <body className={`${inter.className} bg-slate-600`}>{children}</body>
      </Theme>
      <Analytics />
    </html>
  )
}
