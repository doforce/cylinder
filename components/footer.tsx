import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { HoverLink } from "./links"
import { ThemeChange } from "./theme-change"
import config from "@/config"
import { Socials } from "./socials"

function Items({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-center font-medium">{title}</span>
      <div className="flex flex-col gap-1.5 text-foreground/85">{children}</div>
    </div>
  )
}

export function Footer({ className }: { className?: string }) {
  const { relevant, resources } = config
  return (
    <div className={cn("flex flex-wrap justify-center gap-3 pb-2 pt-4 md:gap-6", className)}>
      <Items title="Resource">
        {resources.map(({ label, url }) => (
          <HoverLink key={label} href={url} target="_blank" className="font-normal">
            {label}
          </HoverLink>
        ))}
      </Items>
      <Items title="Social" className="md:hidden">
        <Socials className="flex-col items-start gap-1.5" />
      </Items>
      <Items title="Relevant">
        {relevant.map(({ label, url }) => (
          <HoverLink key={label} href={url} target="_blank" className="font-normal">
            {label}
          </HoverLink>
        ))}
      </Items>
      <Items title="Preferences" className="md:hiddend">
        <ThemeChange />
      </Items>
    </div>
  )
}
