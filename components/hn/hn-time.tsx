"use client"
import { utcLocal } from "@/lib/utils"

export function HNTime({ ux }: { ux: number }) {
  const val = ux.toString().length === 10 ? ux * 1000 : ux
  return (
    <time dateTime={new Date(val).toISOString()} className="text-sm">
      {utcLocal(ux)}
    </time>
  )
}
