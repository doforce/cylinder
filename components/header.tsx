import { Logo } from "./logo"
import { NavLinks } from "./nav"
import { Socials } from "./socials"
import { ThemeChange } from "./theme-change"
import { Separator } from "./ui/separator"

export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-0.5 px-2 md:gap-1 md:px-8">
      <Logo />
      <NavLinks />
      <div className="hidden items-center gap-2 md:flex">
        <ThemeChange simple />
        <Separator orientation="vertical" className="h-5" />
        <Socials hiddenText />
      </div>
    </header>
  )
}
