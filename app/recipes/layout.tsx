import type { Metadata } from 'next'
import "../../app/globals.css";

export const metadata: Metadata = {
  title: 'Receitas',
  description: 'Generated',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}