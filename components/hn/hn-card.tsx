import { getHNbase, ycombinatorItem, ycombinatorUser } from "@/lib/utils"
import { HNTime } from "./hn-time"
import { HNLeft } from "./hn-icons"
import { SiteCard } from "@/components/site-card"
import type { HNItem } from "@/lib/types"
import { TitleLink } from "../links"

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
  const { host, href: hostHref } = getHNbase(item.url)
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
        <TitleLink
          target="_blank"
          className="text-sm font-normal"
          href={hostHref}
          aria-label="The hostname where this article is from">
          {host}
        </TitleLink>
        <div className="flex w-full items-center justify-between gap-1">
          <HNTime ux={item.time} />
          <TitleLink target="_blank" href={ycombinatorUser(item.by)} className="font-medium">
            {`@${item.by}`}
          </TitleLink>
        </div>
      </div>
    </SiteCard>
  )
}
