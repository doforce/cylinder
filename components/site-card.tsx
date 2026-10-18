import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SiteCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex w-full gap-1 rounded-lg border p-2 md:p-3",
        "shadow-md transition hover:shadow-xl",
        className,
      )}>
      {children}
    </div>
  )
}
