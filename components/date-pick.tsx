"use client"

import { ReactNode } from "react"
import { CalendarDaysIcon, XIcon } from "lucide-react"
import { cn, dateAdd2utc, displayDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import config from "@/config"

export function DatePick({
  className,
  date,
  setDate,
  children,
}: {
  className?: string
  date?: Date
  setDate: (s?: Date) => void
  children?: ReactNode
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("flex items-center justify-between px-2", className)}>
          <div className="flex items-center gap-1">
            <CalendarDaysIcon className="size-4" />
            {date ? <span>{displayDate(date)}</span> : <>{children}</>}
          </div>
          {date && (
            <span onClick={() => setDate(undefined)} className="cursor-pointer rounded p-1">
              <XIcon className="size-3 transition-transform hover:rotate-12 hover:text-accent-foreground" />
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="start">
        <Select onValueChange={value => setDate(dateAdd2utc(value, true))}>
          <SelectTrigger>
            <SelectValue placeholder="Select Preset" />
          </SelectTrigger>
          <SelectContent position="popper">
            {config.datePresets.map(({ key, label, unit }) => (
              <SelectItem key={`${unit}_${key}`} value={`${key}_${unit}`}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
