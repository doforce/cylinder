import { SiteCard } from "../site-card"

export function HNCardFallback({ className }: { className?: string }) {
  return (
    <SiteCard className={className}>
      <span className="bg-accent h-10 w-10 animate-pulse rounded-lg" />
      <div className="flex w-full flex-col gap-1 p-2 md:gap-2">
        <span className="bg-accent h-6 animate-pulse rounded-lg"></span>
        <span className="bg-accent h-5 w-1/3 animate-pulse rounded-lg"></span>
        <span className="bg-accent h-5 w-1/2 animate-pulse rounded-lg"></span>
      </div>
    </SiteCard>
  )
}
