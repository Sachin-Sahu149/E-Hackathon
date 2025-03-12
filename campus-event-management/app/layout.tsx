import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Campus Event Management System",
  description: "Discover, create, and participate in campus events",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
          <Navbar />
          <main>{children}</main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

