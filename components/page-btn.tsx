import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export function PageBtn({
  children,
  className,
  disable,
  onClick,
  active,
}: {
  children?: ReactNode
  className?: string
  onClick?: () => void
  disable?: boolean
  active?: boolean
}) {
  return (
    <button
      className={cn(
        "flex size-8 items-center justify-center rounded-sm text-sm font-medium transition duration-300 md:size-9",
        "bg-accent text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-primary hover:text-primary-foreground",
        className,
      )}
      onClick={onClick}
      disabled={disable}>
      {children}
    </button>
  )
}
