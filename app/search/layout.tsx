import { Metadata } from "next"
import config from "@/config"
import { Toaster } from "@/components/ui/sonner"
import type { ReactNode } from "react"

const { textName, site } = config

export function generateMetadata(): Metadata {
  return {
    title: `Search in Hacker News - ${textName}`,
    description:
      "Search everything in Hacker News, include stories, commments, polls, pollopts, show, ask",
    openGraph: {
      siteName: textName,
      url: `${site}/search`,
    },
  }
}

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full max-w-2xl flex-col items-center gap-2">
      {children}
      <Toaster />
    </div>
  )
}
