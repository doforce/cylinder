import "@fontsource-variable/inter"
import "@/styles/globals.css"
import type { Metadata } from "next"
import config from "@/config"
import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const {
  meta: { title, description, keywords },
  textName,
  site,
} = config

export async function generateMetadata() {
  const metadata: Metadata = {
    metadataBase: new URL(site),
    title,
    description,
    keywords,
    openGraph: { title, description, siteName: textName, url: site },
  }
  return metadata
}

export default function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://stats.doforce.xyz/script.js"
          data-website-id="016c8b4c-846d-4f8e-bd42-d2fe22c94389"></script>
      </head>
      <body className="max-w-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col gap-2">
            <Header />
            <div className="flex flex-1 flex-col items-center px-2 py-2 md:px-12 md:py-6">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
