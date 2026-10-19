import { getHNbase, itemURL } from "@/lib/utils"
import { HNLeft } from "./hn-icons"
import { SiteCard } from "@/components/site-card"
import type { HNSearchHit } from "@/lib/types"
import { TitleLink } from "../links"
import { ItemFooter } from "../item-footer"
import { CopyButton } from "../copy-button"

export function HNCard({
  index,
  item: { title, story_id, url, created_at_i, author, points, num_comments },
  className,
  indexFrom = 0,
}: {
  index: number
  item: HNSearchHit
  className?: string
  indexFrom?: number
}) {
  const { host } = getHNbase(url)
  const href = itemURL({ url, story_id })
  return (
    <SiteCard className={className}>
      <HNLeft index={indexFrom + index + 1} item={{ story_id, points, num_comments }} />
      <div className="flex w-full flex-col justify-center gap-1 p-2 md:gap-2">
        <div className="flex items-start gap-1">
          <TitleLink
            target="_blank"
            aria-label={`The external link of '${title}'`}
            href={href}
            className="min-w-0">
            {title}
          </TitleLink>
          <CopyButton value={href} />
        </div>
        <span className="w-fit text-sm">{host}</span>
        <ItemFooter time={created_at_i} author={author} />
      </div>
    </SiteCard>
  )
}
