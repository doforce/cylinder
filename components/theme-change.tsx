"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon, Laptop2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { HTMLProps, ReactNode } from "react"

function Button({
  className,
  children,
  onClick,
  ...props
}: {
  className?: string
  children: ReactNode
  onClick?: () => void
} & Pick<HTMLProps<HTMLButtonElement>, "id" | "aria-label">) {
  return (
    <button
      {...props}
      onClick={onClick}
      suppressHydrationWarning
      className={cn("rounded-lg p-1 hover:bg-accent hover:text-accent-foreground", className)}>
      {children}
    </button>
  )
}

export function ThemeChange({ simple, className }: { simple?: boolean; className?: string }) {
  const { theme, systemTheme, setTheme } = useTheme()

  const onChange = (value?: string) => {
    if (value) {
      setTheme(value)
      return
    }
    const toggleTarget = theme === "system" ? systemTheme : theme
    const text = toggleTarget == "light" ? "dark" : "light"
    setTheme(text)
  }
  return (
    <>
      <Button
        id="current-theme"
        aria-label="Chanage current theme"
        className={cn(!simple && "hidden", className)}
        onClick={() => onChange()}>
        {theme === "dark" ? (
          <MoonIcon className="size-5 transition-transform hover:rotate-12" />
        ) : (
          <SunIcon className="size-5 transition-transform hover:rotate-12" />
        )}
      </Button>
      <div className={cn("flex items-center gap-1", simple && "hidden")}>
        <Button
          id="light-theme"
          aria-label="Change to light theme"
          onClick={() => onChange("light")}
          className={theme === "light" ? "bg-accent" : undefined}>
          <SunIcon className="size-5 transition-transform hover:rotate-12" />
        </Button>
        <Button
          id="dark-theme"
          aria-label="Change to dark theme"
          onClick={() => onChange("dark")}
          className={theme === "dark" ? "bg-accent" : undefined}>
          <MoonIcon className="size-5 transition-transform hover:rotate-12" />
        </Button>
        <Button
          id="system-theme"
          aria-label="Change to system theme"
          onClick={() => onChange("system")}
          className={theme === "system" || !theme ? "bg-accent" : undefined}>
          <Laptop2Icon className="size-5 transition-transform hover:rotate-12" />
        </Button>
      </div>
    </>
  )
}
