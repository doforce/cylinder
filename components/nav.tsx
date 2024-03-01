"use client"
import config from "@/config"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { HoverLink } from "./links"
import { SearchIcon } from "lucide-react"

export function NavLinks({ className }: { className?: string; onClickMenu?: () => void }) {
  const currentPath = usePathname()
  const { hnMenu } = config

  const matchPath = (item: string) => {
    const match = currentPath.match(item)
    return match || (!match && currentPath === "/" && item == hnMenu[0])
  }

  const labelMenu = (item: string) => {
    return item.replace("stories", "").replace(/^./, str => str.toUpperCase())
  }

  return (
    <div className={cn("flex flex-wrap gap-1 px-2 text-sm md:gap-2", className)}>
      {[...hnMenu, "search"].map(item => (
        <HoverLink
          key={item}
          title={item}
          aria-label={`Go to ${item} page`}
          href={item !== "search" ? `/${item}/1` : `/${item}`}
          className={cn("px-2 py-1", matchPath(item) ? "bg-accent" : "", className)}>
          {item !== "search" ? labelMenu(item) : <SearchIcon className="size-5" />}
        </HoverLink>
      ))}
    </div>
  )
}
