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
    <a
      href={ycombinatorItem(id)}
      target="_blank"
      className="flex items-center gap-1 transition-transform hover:rotate-6">
      <span className="px-1 font-semibold">{index}</span>
      <div className="flex flex-col gap-0.5">
        {score !== undefined && (
          <span className="flex items-center justify-center gap-0.5">
            <TrendingUpIcon className="size-4" />
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
      </div>
    </a>
  )
}
