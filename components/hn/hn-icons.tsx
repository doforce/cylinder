import type { HNItem } from "@/lib/types"
import { ycombinatorItem } from "@/lib/utils"
import { MessageSquareIcon, TrendingUpIcon } from "lucide-react"

export function HNLeft({
  item: { id, score, descendants },
  index,
}: {
  item: HNItem
  index: number
}) {
  return (
    <div className="flex items-center">
      <span className="px-1 font-semibold">{index}</span>
      <a
        href={ycombinatorItem(id)}
        target="_blank"
        className="flex flex-col items-center justify-center gap-1 transition-transform hover:rotate-6">
        {score !== undefined && (
          <span className="flex items-center justify-center gap-0.5 px-2">
            <TrendingUpIcon className="size-5" />
            {score}
          </span>
        )}

        {descendants !== undefined && score !== undefined && (
          <span className="h-[1px] w-10 bg-primary" />
        )}
        {descendants !== undefined && (
          <span className="flex items-center justify-center gap-0.5">
            <MessageSquareIcon className="size-4" />
            {descendants}
          </span>
        )}
      </a>
    </div>
  )
}
