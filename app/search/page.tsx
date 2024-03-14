"use client"

import useSWR from "swr"
import { useDebounce } from "react-use"
import { useEffect, useState } from "react"
import { RotateCcwIcon, XIcon, SearchIcon, CheckSquareIcon, XSquareIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { HNCard } from "@/components/hn/hn-card"
import { Pagination } from "./pagination"
import { HNFilter } from "./filter"
import { fetchSearch } from "@/lib/hn"
import { useCustomPreset, usePresetKey, useQuery } from "./store"
import { CommentCard } from "./comment-card"
import { ItemGrid } from "@/components/item-grid"
import { NoData } from "@/components/no-data"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"

const tooltipDuration = 500

export default function SearchPage() {
  const search = useQuery()
  const usePreset = usePresetKey()
  const useCustom = useCustomPreset()
  const [searchText, setSearchText] = useState("")
  const [searching, setSearching] = useState(false)

  useDebounce(
    () => {
      search.setQuery(searchText)
      setSearching(true)
    },
    200,
    [searchText],
  )

  useEffect(() => {
    setSearchText(usePreset.value!)
  }, [usePreset.value])

  const { data, isLoading } = useSWR(search, async p => {
    if (!p.query) return null
    const result = await fetchSearch(p)
    setSearching(false)
    if (!result) return null
    search.setPage(result.page)
    return result
  })

  const onClear = () => {
    setSearchText("")
  }

  const onAddPreset = () => {
    useCustom.unshift(searchText)
    toast.success(`Added ${searchText}`, { position: "top-left" })
  }

  const onRemovePreset = () => {
    useCustom.del(searchText)
    toast.success(`Removed ${searchText}`, { position: "top-left" })
  }

  const onInputChange = (value: string) => {
    setSearchText(value)
  }

  return (
    <>
      <div className="relative w-full">
        <span className="absolute inset-y-0 start-0 grid place-content-center pl-3">
          <SearchIcon className="size-4" />
        </span>
        <Input
          autoFocus
          className="indent-5"
          placeholder="Type some text to search..."
          value={searchText}
          onChange={e => onInputChange(e.target.value)}
        />
        {search.query && (
          <>
            {!useCustom.list.includes(searchText) ? (
              <TooltipProvider delayDuration={tooltipDuration}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      onClick={onAddPreset}
                      className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer px-3 transition-all md:right-10">
                      <CheckSquareIcon className="size-4" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Preset</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider delayDuration={tooltipDuration}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      onClick={onRemovePreset}
                      className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer px-3 transition-all md:right-10">
                      <XSquareIcon className="size-4" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove from Preset</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <TooltipProvider delayDuration={tooltipDuration}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    onClick={onClear}
                    className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer px-3">
                    <XIcon className="size-4" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Clear Text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        )}
      </div>
      <HNFilter />
      {search.query && isLoading && (
        <RotateCcwIcon className="my-2 size-5 animate-spin md:size-6" />
      )}
      <ItemGrid>
        {data?.hits.map(
          (
            {
              story_id: id,
              url,
              author: by,
              created_at_i: time,
              num_comments: descendants,
              points: score,
              title,
              _tags,
              story_title,
              comment_text,
              query,
              story_url,
            },
            index,
          ) =>
            _tags.includes("comment") ? (
              <CommentCard
                story_id={id}
                created_at_i={time}
                story_url={story_url}
                query={query}
                key={`${index}_${id}`}
                author={by}
                comment_text={comment_text}
                story_title={story_title}
              />
            ) : (
              <HNCard
                index={index}
                key={id}
                indexFrom={data.hitsPerPage * data.page}
                item={{ id, url, by, time, title, type: _tags[0] as any, descendants, score }}
              />
            ),
        )}
      </ItemGrid>
      {data?.hits && data.hits.length > 0 ? (
        <Pagination nbPages={data.nbPages} className="my-2" />
      ) : !isLoading && searchText && !searching ? (
        <NoData className="mt-4" />
      ) : (
        <div></div>
      )}
    </>
  )
}
