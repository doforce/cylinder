import { fetchStory } from "@/lib/hn"
import { HNCard } from "./hn-card"
import { HNSearchHit } from "@/lib/types"

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
  const {
    title,
    id: story_id,
    url,
    time: created_at_i,
    by: author,
    score: points,
    descendants: num_comments,
  } = item
  return (
    <HNCard
      index={index}
      indexFrom={indexFrom}
      item={{ title, story_id, url, created_at_i, points, num_comments, author } as HNSearchHit}
    />
  )
}
