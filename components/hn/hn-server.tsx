import { notFound } from "next/navigation"
import config from "@/config"
import { fetchStories } from "@/lib/hn"
import { Suspense } from "react"
import { HNCardFallback } from "@/components/hn/hn-card-fallback"
import { HNFooter } from "@/components/hn/hn-footer"
import { HNFetchCard } from "@/components/hn/hn-fetch-card"
import { ItemGrid } from "../item-grid"
import { NoData } from "../no-data"

export async function HNServer({ tab, num }: { tab: string; num: string }) {
  if (!config.hnMenu.includes(tab)) {
    notFound()
  }
  const { hnPageSize } = config
  const page = Number.parseInt(num)
  const indexFrom = hnPageSize * (page - 1)
  let ids = await fetchStories(tab)
  if (!ids) {
    notFound()
  }
  const total = ids.length
  ids = ids.slice(indexFrom, indexFrom + hnPageSize)
  return ids.length > 0 ? (
    <div className="flex w-full flex-col items-center">
      <ItemGrid>
        {ids.map((id, index) => (
          <Suspense fallback={<HNCardFallback className="max-w-lg" key={`fb-${id}`} />}>
            <HNFetchCard indexFrom={indexFrom} id={id} index={index} key={id} />
          </Suspense>
        ))}
      </ItemGrid>
      <HNFooter className="max-w-lg md:max-w-4xl" tab={tab} total={total} page={page} />
    </div>
  ) : (
    <NoData className="mt-4" />
  )
}
