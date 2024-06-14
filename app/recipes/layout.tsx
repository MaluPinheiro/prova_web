import type { Metadata } from 'next'
import "../../app/globals.css";

export const metadata: Metadata = {
  title: 'Receitas',
  description: 'Generated',
}

export default function ReceitassLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={"bg-slate-100"}>{children}</body>
      </html>
    )
  }