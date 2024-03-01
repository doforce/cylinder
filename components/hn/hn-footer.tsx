import config from "@/config"
import { cn } from "@/lib/utils"
import { BtnLink } from "@/components/links"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export function HNFooter({
  total,
  page,
  tab,
  className,
}: {
  total: number
  page: number
  tab: string
  className?: string
}) {
  const { hnPageSize } = config
  const hasPre = page > 1
  const hasNext = page < Math.ceil(total / hnPageSize)
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <div
        className={cn(
          "mt-4 flex flex-col gap-4 md:flex-row",
          hasNext && hasPre ? "justify-between" : "justify-center",
        )}>
        {hasPre && (
          <BtnLink href={`/${tab}/${page - 1}`} aria-label="Previous page">
            <ChevronLeftIcon className="size-5" />
            Previous
          </BtnLink>
        )}
        {hasNext && (
          <BtnLink href={`/${tab}/${page + 1}`} aria-label="Next page">
            Next
            <ChevronRightIcon className="size-5" />
          </BtnLink>
        )}
      </div>
      {total > hnPageSize && (
        <div className="flex w-full justify-center py-2 text-base font-medium">
          <span className="font-normal">Total&nbsp;</span>
          {total}
        </div>
      )}
    </div>
  )
}
