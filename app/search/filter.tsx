"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import config from "@/config"
import { useCustomPreset, usePresetKey, useQuery } from "./store"
import { DatePick } from "@/components/date-pick"

export function HNFilter() {
  const state = useQuery()
  const usePreset = usePresetKey()
  const useCustom = useCustomPreset()

  const PRESET_KEYS = (process.env.NEXT_PUBLIC_SEARCH_PRESET || "").split(",").filter(Boolean)

  return (
    <div className="flex w-full flex-wrap gap-1">
      <Select value={state.sort} onValueChange={v => state.setSort(v)}>
        <SelectTrigger className="w-32 hover:bg-accent hover:text-accent-foreground md:h-9">
          <SelectValue placeholder="Select a sort" />
        </SelectTrigger>
        <SelectContent>
          {config.hnSort.map(s => (
            <SelectItem value={s.key} key={s.key}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={state.tags} onValueChange={v => state.setTag(v)}>
        <SelectTrigger className="w-32 hover:bg-accent hover:text-accent-foreground md:h-9">
          <SelectValue placeholder="Sored by" />
        </SelectTrigger>
        <SelectContent>
          {[{ key: "all", label: "All" }, ...config.hnSupportTags].map(s => (
            <SelectItem value={s.key} key={s.key}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <DatePick className="w-40" setDate={state.setFrom} date={state.from}>
        From date
      </DatePick>
      <DatePick className="w-40" setDate={state.setTo} date={state.to}>
        To date
      </DatePick>
      <Select value={usePreset.value} onValueChange={v => usePreset.setValue(v)}>
        <SelectTrigger className="w-32 hover:bg-accent hover:text-accent-foreground md:h-9">
          <SelectValue placeholder="Preset key" />
        </SelectTrigger>
        <SelectContent>
          {useCustom.list.map(s => (
            <SelectItem value={s} key={s}>
              {s}
            </SelectItem>
          ))}
          {PRESET_KEYS.map(s => (
            <SelectItem value={s} key={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
