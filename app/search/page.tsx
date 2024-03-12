"use client"

import "@/styles/search.css"
import useSWR from "swr"
import { useDebounce } from "react-use"
import { useState } from "react"
import { RotateCcwIcon, XIcon, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { HNCard } from "@/components/hn/hn-card"
import { Pagination } from "./pagination"
import { HNFilter } from "./filter"
import { fetchSearch } from "@/lib/hn"
import { useQuery } from "./store"
import { CommentCard } from "./comment-card"
import { ItemGrid } from "@/components/item-grid"
import { NoData } from "@/components/no-data"

export default function SearchPage() {
  const search = useQuery()
  const [searchText, setSearchText] = useState("")
  const [searching, setSearching] = useState(false)

  useDebounce(
    () => {
      search.setQuery(searchText)
      setSearching(true)
    },
    300,
    [searchText],
  )

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

  const onInputChange = (value: string) => {
    setSearchText(value)
  }

  return (
    <>
      <div className="relative w-full max-w-xl">
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
          <span
            onClick={onClear}
            className="absolute inset-y-0 end-0 grid cursor-pointer place-content-center px-3 transition-transform hover:rotate-12">
            <XIcon className="size-4" />
          </span>
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
                className="max-w-lg"
                query={query}
                key={`${index}_${id}`}
                author={by}
                comment_text={comment_text}
                story_title={story_title}
              />
            ) : (
              <HNCard
                className="max-w-lg"
                index={index}
                key={id}
                indexFrom={data.hitsPerPage * data.page}
                item={{ id, url, by, time, title, type: _tags[0] as any, descendants, score }}
              />
            ),
        )}
      </ItemGrid>
      {data?.hits && data.hits.length > 0 ? (
        <Pagination nbPages={data.nbPages} className="my-2 max-w-lg" />
      ) : !isLoading && searchText && !searching ? (
        <NoData className="mt-4" />
      ) : (
        <div></div>
      )}
    </>
  )
}
