import { cn } from "@/lib/utils"
import { InfoIcon } from "lucide-react"

export function NoData({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <InfoIcon className="stroke-destructive size-5" />
      <span className="text-lg font-semibold">No Result</span>
    </div>
  )
}
