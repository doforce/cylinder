"use client"
import { useState } from "react"
import htmlParser from "html-react-parser"
import { ChevronDownIcon, ChevronUpIcon, MoveRightIcon } from "lucide-react"
import { SiteCard } from "@/components/site-card"
import { HNSearchComment } from "@/lib/types"
import { cn, ycombinatorItem } from "@/lib/utils"
import { TitleLink } from "@/components/links"
import { ItemFooter } from "@/components/item-footer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

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
  const [isOpen, setIsOpen] = useState(false)
  const ycURL = ycombinatorItem(story_id)

  return (
    <SiteCard className={cn("flex-col gap-2", className)}>
      <TitleLink target="_blank" href={story_url ? story_url : ycURL}>
        {story_title}
      </TitleLink>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {!isOpen && (
          <article
            className={cn(
              "comment-container prose w-full overflow-x-hidden leading-snug dark:prose-invert",
            )}>
            {htmlParser(comment_text)}
          </article>
        )}
        <CollapsibleContent>
          <article className="prose w-full overflow-x-hidden leading-snug dark:prose-invert">
            {htmlParser(comment_text)}
          </article>
        </CollapsibleContent>
        <div className="flex w-full flex-wrap items-center justify-between gap-1 py-1 text-sm font-medium text-primary/80">
          <Link
            href={ycURL}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-sm px-2 py-0.5 transition hover:bg-accent hover:text-primary">
            Discuss <MoveRightIcon className="size-4" />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-0.5 transition hover:bg-accent hover:text-primary">
            <span>{isOpen ? "Less" : "More"}</span>
            <CollapsibleTrigger asChild>
              <span className="flex items-center justify-center gap-0.5">
                {isOpen ? (
                  <ChevronUpIcon className="size-4" />
                ) : (
                  <ChevronDownIcon className="size-4" />
                )}
              </span>
            </CollapsibleTrigger>
          </div>
        </div>
      </Collapsible>
      <ItemFooter time={created_at_i} author={author} />
    </SiteCard>
  )
}
