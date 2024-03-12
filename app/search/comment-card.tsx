"use client"
import htmlParser from "html-react-parser"
import { useState } from "react"
import { SiteCard } from "@/components/site-card"
import { HNSearchComment } from "@/lib/types"
import { cn, ycombinatorItem } from "@/lib/utils"
import { TitleLink } from "@/components/links"
import { Separator } from "@/components/ui/separator"
import { ChevronDownIcon } from "lucide-react"
import { ItemFooter } from "@/components/item-footer"

export function CommentCard({
  className,
  author,
  comment_text,
  story_url,
  story_title,
  created_at_i,
  story_id,
}: {
  className?: string
  author: string
  query: string
  created_at_i: number
  story_id: number
} & HNSearchComment) {
  const [showFull, setShowFull] = useState(false)

  return (
    <SiteCard className={cn("w-full flex-col", className)}>
      <TitleLink target="_blank" href={story_url ? story_url : ycombinatorItem(story_id)}>
        {story_title}
      </TitleLink>
      <div
        className="flex w-full cursor-pointer items-center"
        onClick={() => setShowFull(!showFull)}>
        <Separator className="w-auto flex-shrink flex-grow" />
        <span className="cursor-pointer px-1">
          <ChevronDownIcon className="size-5 transition-transform hover:rotate-12" />
        </span>
      </div>
      <article
        onClick={showFull ? undefined : () => setShowFull(!showFull)}
        className={cn(
          "prose w-full overflow-x-hidden leading-snug dark:prose-invert",
          showFull ? "" : "comment-container cursor-pointer",
        )}>
        {htmlParser(comment_text)}
      </article>
      <Separator />
      <ItemFooter time={created_at_i} author={author} />
    </SiteCard>
  )
}
