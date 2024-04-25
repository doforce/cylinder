"use client"
import { useEffect, useState } from "react"
import { ChevronUpIcon } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function BackTop() {
  const [showTop, setShowTop] = useState(false)
  const onScroll = () => {
    setShowTop(window.scrollY > window.innerHeight * 0.8)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])
  return (
    // <button
    //   onClick={() =>
    //     window.scroll({
    //       top: 0,
    //       left: 0,
    //       behavior: "smooth",
    //     })
    //   }
    //   className={cn(
    //     showTop ? "" : "hidden",
    //     "fixed bottom-0 right-0 z-50 mb-4 mr-4 p-3",
    //     "sm:mb-6 sm:mr-8 md:mr-16 lg:mr-32",
    //     "rounded-lg border border-border bg-accent transition duration-300",
    //     "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
    //   )}>
    //   <ChevronUpIcon className="size-4" />
    // </button>
    <motion.div
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      transition={{ duration: 0.3, ease: "linear" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        showTop ? "" : "hidden",
        "fixed bottom-0 right-0 z-50 mb-4 mr-4 cursor-pointer rounded-md p-3",
        "sm:mb-6 sm:mr-8 md:mr-16 lg:mr-32",
        "bg-primary text-primary-foreground",
      )}>
      <ChevronUpIcon className="size-4" />
    </motion.div>
  )
}
