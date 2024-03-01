import config from "@/config"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { site, hnMenu } = config

  const menuMap: MetadataRoute.Sitemap = hnMenu.map(x => ({
    url: `${site}/${x}/1`,
    changeFrequency: "daily",
    priority: 0.8,
  }))
  return [
    {
      url: site,
      changeFrequency: "daily",
      priority: 1,
    },
    ...menuMap,
    { url: `${site}/search`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}
