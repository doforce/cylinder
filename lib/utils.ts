import { clsx, type ClassValue } from "clsx"
import dayjs from "dayjs"
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

export function utcLocal(ux: number) {
  const val = ux.toString().length === 10 ? ux * 1000 : ux
  return dayjs.utc(val).local().format("MMM DD, YYYY HH:mm")
}

export function toTimestamp(date: Date | string) {
  return dayjs(date).toDate().getTime() / 1000
}

export function displayDate(date: Date) {
  // Jan 20,2022
  return dayjs(date).format("MMM DD, YYYY")
}

export function dateAdd2utc(valueUnit: string, convertStart?: boolean) {
  const [value, unit] = valueUnit.split("_")
  const diff = dayjs().add(Number.parseInt(value), unit as any)
  if (convertStart) return diff.startOf("day").utc().toDate()
  return diff.utc().toDate()
}
