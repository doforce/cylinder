import { BanIcon, ChevronRightIcon } from "lucide-react"
import { BtnLink } from "@/components/links"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <BanIcon className="stroke-destructive size-5" />
        <span className="text-lg font-semibold">Page Not Found</span>
      </div>
      <BtnLink href="/">
        Return Home
        <ChevronRightIcon className="size-5" />
      </BtnLink>
    </div>
  )
}
