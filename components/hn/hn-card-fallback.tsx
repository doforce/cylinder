import { cn } from "@/lib/utils"

export function HNCardFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded-xl border bg-background p-2 shadow",
        className,
      )}>
      <span className="h-10 w-10 animate-pulse rounded-lg bg-accent" />
      <div className="flex w-full flex-col gap-1 p-2 md:gap-2">
        <span className="h-6 animate-pulse rounded-lg bg-accent"></span>
        <span className="h-5 w-1/3 animate-pulse rounded-lg bg-accent"></span>
        <span className="h-5 w-1/2 animate-pulse rounded-lg bg-accent"></span>
      </div>
    </div>
  )
}
