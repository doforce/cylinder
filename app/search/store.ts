import config from "@/config"
import dayjs from "dayjs"
import { create } from "zustand"

export interface QueryStore {
  sort: string
  query: string
  page: number
  tags: string
  from?: Date
  to?: Date
}

export interface QueryStoreAction {
  setPage: (s: number) => void
  setQuery: (s: string) => void
  setSort: (s: string) => void
  setTag: (s: string) => void
  setFrom: (s?: Date) => void
  setTo: (s?: Date) => void
}

export const useQuery = create<QueryStore & QueryStoreAction>(set => ({
  sort: config.hnSort[0].key,
  query: "",
  page: 0,
  tags: config.hnSupportTags[0].key,
  setPage: (s: number) => set(state => ({ ...state, page: s })),
  setQuery: (s: string) => {
    set(state => ({ ...state, query: s }))
    if (s === "") {
      useQuery.setState({ page: 0 })
    }
  },
  setSort: (s: string) => {
    set(state => ({ ...state, sort: s }))
    useQuery.setState({ page: 0 })
  },
  setTag: (s: string) => {
    set(state => ({ ...state, tags: s }))
    useQuery.setState({ page: 0 })
  },
  setFrom: (s?: Date) => {
    if (!s) {
      set(state => ({ ...state, from: undefined }))
    } else {
      set(state => ({ ...state, from: s }))
    }
    useQuery.setState({ page: 0 })
  },
  setTo: (s?: Date) => {
    if (!s) {
      set(state => ({ ...state, to: undefined }))
    } else {
      // include the end date
      set(state => ({ ...state, to: dayjs(s).add(1, "day").toDate() }))
    }

    useQuery.setState({ page: 0 })
  },
}))
