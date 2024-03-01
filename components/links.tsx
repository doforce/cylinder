import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { HTMLProps, ReactNode } from "react"

type Props = { children: ReactNode; className?: string } & LinkProps &
  Pick<HTMLProps<HTMLAnchorElement>, "target" | "title">

export function TitleLink({ children, className, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex gap-1 font-semibold decoration-primary decoration-2 underline-offset-4 transition duration-300 hover:underline",
        className,
      )}>
      {children}
    </Link>
  )
}

export function BtnLink({ children, className, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "flex w-full items-center bg-primary text-primary-foreground hover:bg-primary/80",
        "justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition duration-300",
        className,
      )}>
      {children}
    </Link>
  )
}

export function HoverLink({ children, className, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex w-fit gap-1 rounded-lg p-1 text-sm font-medium transition duration-300 hover:bg-accent hover:text-accent-foreground",
        className,
      )}>
      {children}
    </Link>
  )
}
