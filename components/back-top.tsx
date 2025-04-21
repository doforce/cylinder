"use client"
import { useEffect, useState } from "react"
import { ChevronUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BackTop() {
  const [showTop, setShowTop] = useState(false)
  const onScroll = () => {
    setShowTop(window.scrollY > window.innerHeight * 0.8)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])
  const onClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <span
      onClick={onClick}
      className={cn(
        showTop ? "" : "hidden",
        "fixed bottom-0 right-0 z-50 mb-4 mr-4 cursor-pointer rounded-md p-3",
        "sm:mb-6 sm:mr-8 md:mr-16 lg:mr-32",
        "bg-primary text-primary-foreground",
      )}>
      <ChevronUpIcon className="size-4" />
    </span>
  )
}
