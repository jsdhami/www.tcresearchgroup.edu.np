import "./globals.css"
import React from 'react'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "Tri-Chandra Research Group",
  description: "Innovate, Learn, Share. Join us in exploring new horizons through collaborative research.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header/>
        <main className="pt-14 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer/>
       </ThemeProvider>
      </body>
    </html>
  )
}
