import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "TechCorp Solutions - Digital Innovation Company",
  description:
    "We create innovative digital solutions that transform businesses and deliver exceptional user experiences.",
  keywords: [
    "TechCorp",
    "techcorp solutions",
    "techcorp",
    "techcorp.com",
  
  ],
  authors: [{ name: "TechCorp Team", url: "https://techcorp.com" }],
  creator: "TechCorp",
  metadataBase: new URL("https://techcorp.com"),

  openGraph: {
    title: "TechCorp Solutions - Digital Innovation Company",
    description:
      "Discover how TechCorp delivers innovative digital products that help businesses thrive.",
    url: "https://techcorp.com",
    siteName: "TechCorp Solutions",
    images: [
      {
        url: "https://techcorp.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechCorp Solutions OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TechCorp Solutions",
    description: "We build cutting-edge digital experiences for modern businesses.",
    images: ["https://techcorp.com/twitter-image.jpg"], // Put your actual image URL here
    creator: "@TechCorp",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
