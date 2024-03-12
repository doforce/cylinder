import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SiteCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex w-full gap-1 rounded-xl border bg-card px-1.5 py-1 text-card-foreground",
        "shadow transition-all ease-in hover:bg-accent",
        className,
      )}>
      {children}
    </div>
  )
}
