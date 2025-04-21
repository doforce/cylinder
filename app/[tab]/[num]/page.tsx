import type { Metadata } from "next"
import config from "@/config"
import { HNServer } from "@/components/hn/hn-server"

const { textName, site } = config

interface Props {
  params: Promise<{
    tab: string
    num: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return {
    title:
      params.tab.replace("stories", "").replace(/^[a-z]/, match => match.toUpperCase()) +
      " stories - " +
      textName,
    openGraph: {
      siteName: textName,
      url: `${site}/${params.tab}/${params.num}`,
    },
  };
}

export default async function StoriesPage(props: Props) {
  const params = await props.params;

  const {
    tab,
    num
  } = params;

  return <HNServer tab={tab} num={num} />
}
