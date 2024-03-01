"use client"

import { useCallback, useMemo, useState } from "react"
import { ChevronsLeftIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react"
import { PageBtn } from "@/components/page-btn"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useQuery } from "./store"

export function Pagination({ className, nbPages }: { className?: string; nbPages: number }) {
  const state = useQuery()
  const buildPages = useCallback(() => Array.from({ length: nbPages }).map((_, index) => index), [])
  const [list, setList] = useState<number[]>([])
  const [pageList, setPageList] = useState<number[]>(buildPages())

  useMemo(() => {
    setPageList(buildPages())
  }, [nbPages])

  useMemo(() => {
    let li = pageList.filter(x => x <= 2 || x >= nbPages - 3)
    if (!li.includes(state.page)) {
      li.push(state.page)
    }
    li.sort((a, b) => a - b)
    if (nbPages > 6) {
      li = [...li.slice(0, 3), -1, ...li.slice(3)]
    }
    setList(li)
  }, [state.page])

  const goto = useCallback((p: number) => {
    state.setPage(p)
  }, [])
  return (
    <div className={cn("flex w-full items-center justify-center gap-4", className)}>
      <div className="flex gap-1.5">
        <PageBtn onClick={() => goto(state.page - 1)} disable={state.page == 0} className="mr-1">
          <ChevronLeftIcon className="size-4" />
        </PageBtn>
        {list.map(p => (
          <PageBtn
            active={state.page === p}
            disable={p === -1}
            key={`p-${p}`}
            onClick={() => goto(p)}>
            {p === -1 ? "..." : p + 1}
          </PageBtn>
        ))}
        <PageBtn
          onClick={() => goto(state.page + 1)}
          disable={state.page >= nbPages - 1}
          className="mx-1">
          <ChevronRightIcon className="size-4" />
        </PageBtn>
      </div>
      <Select defaultValue={state.page.toString()} onValueChange={v => goto(Number.parseInt(v))}>
        <SelectTrigger className="h-8 w-fit gap-0.5 transition duration-300 md:h-9">
          <SelectValue placeholder="Select a page" />
        </SelectTrigger>
        <SelectContent>
          {pageList.map(p => (
            <SelectItem key={`select-${p}`} value={p.toString()}>
              {p + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
