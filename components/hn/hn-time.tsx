"use client"
import { utcLocal } from "@/lib/utils"

export function HNTime({ ux }: { ux: number }) {
  return (
    <time dateTime={new Date(ux).toISOString()} className="text-sm">
      {utcLocal(ux)}
    </time>
  )
}
