import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jolaoluwa Olusanya (Jola) - Fullstack Developer Portfolio",
  description:
    "Portfolio website showcasing the projects and skills of Jolaoluwa Olusanya, a fullstack developer specializing in modern web technologies.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jolaoluwa Olusanya - Fullstack Developer",
    description:
      "Jolaoluwa Olusanya’s portfolio - Fullstack Developer (Next.js, React, Node).",
    url: "https://www.jolaoluwa.site",
    siteName: "Jolaoluwa Olusanya Portfolio",
    images: [
      {
        url: "https://www.jolaoluwa.site/jolaoluwa.png",
        width: 1200,
        height: 630,
        alt: "Jolaoluwa Olusanya - Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
