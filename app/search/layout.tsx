import config from "@/config"
import "@fontsource-variable/inter"
import { Metadata } from "next"
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
  return <div className="flex h-full w-full flex-col items-center gap-2">{children}</div>
}
