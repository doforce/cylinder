import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export function ItemGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "grid w-full max-w-4xl grid-cols-1 justify-items-center gap-2 md:grid-cols-2",
        className,
      )}>
      {children}
    </div>
  )
}
