import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SiteCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex w-full gap-1 rounded-xl border bg-card p-1.5 text-card-foreground",
        "shadow transition-all ease-in",
        className,
      )}>
      {children}
    </div>
  )
}
