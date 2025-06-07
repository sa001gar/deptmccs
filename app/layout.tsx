import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Department of Computer Science - Mankar College",
  description: "Excellence in Computer Science Education and Research at Mankar College",
  keywords: "computer science, education, mankar college, technology, programming, research",
  authors: [{ name: "Department of Computer Science, Mankar College" }],
  openGraph: {
    title: "Department of Computer Science - Mankar College",
    description: "Excellence in Computer Science Education and Research",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
