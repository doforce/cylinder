import type { HNSearchHit } from "@/lib/types"
import { ycombinatorItem } from "@/lib/utils"
import { MessageSquareIcon, TrendingUpIcon } from "lucide-react"

export function HNLeft({
  item: { story_id, points, num_comments },
  index,
}: {
  item: Pick<HNSearchHit, "story_id" | "points" | "num_comments">
  index: number
}) {
  return (
    <a
      href={ycombinatorItem(story_id)}
      target="_blank"
      className="flex items-center gap-1 transition-transform hover:rotate-6">
      <span className="px-1 font-semibold">{index}</span>
      <div className="flex flex-col gap-0.5">
        {points !== undefined && (
          <span className="flex items-center justify-center gap-0.5">
            <TrendingUpIcon className="size-4" />
            {points}
          </span>
        )}

        {num_comments !== undefined && points !== undefined && (
          <span className="h-[1px] w-10 bg-primary" />
        )}
        {num_comments !== undefined && (
          <span className="flex items-center justify-center gap-0.5">
            <MessageSquareIcon className="size-4" />
            {num_comments}
          </span>
        )}
      </div>
    </a>
  )
}
