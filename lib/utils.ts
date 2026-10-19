import { clsx, type ClassValue } from "clsx"
import dayjs, { type ManipulateType } from "dayjs"
import utc from "dayjs/plugin/utc"
import { twMerge } from "tailwind-merge"

dayjs.extend(utc)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHNbase(url?: string) {
  const u = new URL(url || "https://news.ycombinator.com")
  return { href: `${u.protocol}//${u.hostname}`, host: u.hostname }
}

export function ycombinatorItem(id: number) {
  return `https://news.ycombinator.com/item?id=${id}`
}

export function itemURL({ url, story_id }: { url?: string; story_id: number }) {
  return url ? url : ycombinatorItem(story_id)
}

export function utcLocal(ux: number) {
  const val = ux.toString().length === 10 ? ux * 1000 : ux
  return dayjs.utc(val).local().format("MMM DD, YYYY HH:mm")
}

export function toTimestamp(date: Date | string) {
  return dayjs(date).toDate().getTime() / 1000
}

export function endOfDayTimestamp(date: Date | string) {
  return toTimestamp(dayjs(date).add(1, "day").toDate())
}

export function displayDate(date: Date) {
  // Jan 20,2022
  return dayjs(date).format("MMM DD, YYYY")
}

export function dateAdd2utc(valueUnit: string, convertStart?: boolean) {
  const [count, unit] = valueUnit.split("_")
  const diff = dayjs().subtract(Number.parseInt(count), unit as ManipulateType)
  if (convertStart) return diff.startOf("day").utc().toDate()
  return diff.utc().toDate()
}
