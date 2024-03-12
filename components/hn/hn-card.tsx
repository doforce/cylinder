import { getHNbase, ycombinatorItem } from "@/lib/utils"
import { HNLeft } from "./hn-icons"
import { SiteCard } from "@/components/site-card"
import type { HNItem } from "@/lib/types"
import { TitleLink } from "../links"
import { ItemFooter } from "../item-footer"

export function HNCard({
  index,
  item,
  className,
  indexFrom = 0,
}: {
  index: number
  item: HNItem
  className?: string
  indexFrom?: number
}) {
  const { host } = getHNbase(item.url)
  return (
    <SiteCard className={className}>
      <HNLeft index={indexFrom + index + 1} item={item} />
      <div className="flex w-full flex-col justify-center gap-1 p-2 md:gap-2">
        <TitleLink
          target="_blank"
          aria-label={`The external link of '${item.title}'`}
          href={item.url ? item.url : ycombinatorItem(item.id)}>
          {item.title}
        </TitleLink>
        <span className="w-fit text-sm">{host}</span>
        <ItemFooter time={item.time} author={item.by} />
      </div>
    </SiteCard>
  )
}
