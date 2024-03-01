import type { Metadata } from "next"
import config from "@/config"
import { HNServer } from "@/components/hn/hn-server"

const { textName, site } = config

interface Props {
  params: {
    tab: string
    num: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title:
      params.tab.replace("stories", "").replace(/^[a-z]/, match => match.toUpperCase()) +
      " stories - " +
      textName,
    openGraph: {
      siteName: textName,
      url: `${site}/${params.tab}/${params.num}`,
    },
  }
}

export default function StoriesPage({ params: { tab, num } }: Props) {
  return <HNServer tab={tab} num={num} />
}
