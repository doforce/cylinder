import { fetchStory } from "@/lib/hn"
import { HNCard } from "./hn-card"

export async function HNFetchCard({
  id,
  index,
  indexFrom,
}: {
  id: number
  index: number
  indexFrom: number
}) {
  const item = await fetchStory(id)
  if (!item) return <></>
  return <HNCard className="max-w-lg" index={index} indexFrom={indexFrom} item={item} />
}
