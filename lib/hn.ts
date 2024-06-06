import config from "@/config"
import type { HNItem, HNSearchResult } from "./types"
import { QueryStore } from "@/app/search/store"
import { toTimestamp } from "./utils"

export async function request<T>(url: string, fn: string): Promise<T | undefined> {
  try {
    const resp = await fetch(url, { cache: "no-store" })
    if (!resp.ok) {
      return
    }
    return await resp.json()
  } catch (e) {
    console.error(fn, "ERROR", url, (e as Error).message)
    return
  }
}

export async function fetchStories(tab: string) {
  const url = `${config.hnBase}${tab}.json`
  return await request<number[]>(url, "fetchStories")
}

export async function fetchStory(id: number) {
  const url = `${config.hnBase}item/${id}.json`
  return await request<HNItem>(url, "getStory")
}

export async function fetchSearch(q: QueryStore) {
  const { from, to, query, tags, page, sort } = q
  const numericFilters = [
    from ? `created_at_i>=${toTimestamp(from)}` : undefined,
    to ? `created_at_i<${toTimestamp(to)}` : undefined,
  ].filter(Boolean)
  const params = {
    page,
    tags: tags === "all" ? undefined : tags,
    query,
    numericFilters: numericFilters.length > 0 ? numericFilters.join(",") : undefined,
    hitsPerPage: config.hnPageSize,
  }
  const qs = Object.entries(params)
    .filter(([_, val]) => val !== undefined)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val as string)}`)
    .join("&")
  return await request<HNSearchResult>(`${config.hnSearchBase}/${sort}?${qs}`, "fetchSearch")
}
