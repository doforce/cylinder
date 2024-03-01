import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SiteCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex w-full gap-2 rounded-xl border bg-card p-2 text-card-foreground",
        "shadow transition-all ease-in hover:bg-accent",
        className,
      )}>
      {children}
    </div>
  )
}
