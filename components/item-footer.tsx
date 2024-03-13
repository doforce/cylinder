import { HNTime } from "./hn/hn-time"

export function ItemFooter({ time, author }: { time: number; author: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-1 font-medium">
      <HNTime ux={time} />
      <span className="w-fit text-sm">@{author}</span>
    </div>
  )
}
