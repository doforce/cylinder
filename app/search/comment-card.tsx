"use client"

import htmlParser from "html-react-parser"
import { MoveRightIcon } from "lucide-react"
import { SiteCard } from "@/components/site-card"
import { HNSearchHit } from "@/lib/types"
import { cn, ycombinatorItem } from "@/lib/utils"
import { TitleLink } from "@/components/links"
import { ItemFooter } from "@/components/item-footer"
import Link from "next/link"

export function CommentCard({
  className,
  ...item
}: {
  className?: string
} & HNSearchHit) {
  const {
    author,
    story_url,
    story_title,
    created_at_i,
    story_id,
    _highlightResult: {
      comment_text: { value: match_value },
    },
  } = item
  const ycURL = ycombinatorItem(story_id)
  let comment = match_value.replace(new RegExp("<em>", "g"), `<em class="text-primary">`)

  return (
    <SiteCard className={cn("flex-col gap-2", className)}>
      <TitleLink target="_blank" href={story_url ? story_url : ycURL}>
        {story_title}
      </TitleLink>
      <article className="prose w-full overflow-x-hidden leading-snug dark:prose-invert">
        {htmlParser(comment)}
      </article>
      <Link
        href={ycURL}
        target="_blank"
        className="inline-flex w-fit items-center gap-1 rounded-sm px-2 py-0.5 text-sm font-medium text-primary/80 transition hover:bg-accent hover:text-primary">
        Discuss <MoveRightIcon className="size-4" />
      </Link>
      <ItemFooter time={created_at_i} author={author} />
    </SiteCard>
  )
}
