const hnMenu = [
  "topstories",
  "newstories",
  "beststories",
  "showstories",
  "askstories",
  "jobstories",
]

const textName = "Cylinder HN"

export default {
  site: process.env.SITE_URL || "http://localhost:3000",
  textName,

  meta: {
    title: `${textName}: Latest Hacker News,Trending Hacker News, Hacker News Search`,
    description:
      "Visit latest and trending Hacker News's stories, Aak HN, Show HN, HN Jobs, search everything in Hacker News",
    keywords: [
      textName,
      "Hacker News",
      "Cylinder Hacker News",
      "Latest Hacker news",
      "Latest HN",
      "Hacker News Search",
      "HN Search",
      "Hacker News Trending",
      "HN Trending",
      "Tech News",
      "Programing News",
      ...hnMenu,
      ...hnMenu.map(s => s.replace("stories", "") + " stories"),
    ],
  },

  hnMenu,

  resources: [
    { label: "Hacker News API", url: "https://github.com/HackerNews/API" },
    { label: "Hacker News Search API", url: "https://hn.algolia.com/api" },
  ],
  relevant: [{ label: "GitHub Trending API", url: "https://github.com/doforce/github-trending" }],
  social: {
    repo: { label: "Repository", url: "https://github.com/doforce/cylinder" },
    bmac: { label: "Support me", url: "https://www.buymeacoffee.com/doforce" },
  },

  datePresets: [
    { count: 1, label: "yesterday", unit: "day" },
    { count: 3, label: "3 days ago", unit: "day" },
    { count: 7, label: "a week ago", unit: "day" },
    { count: 1, label: "a month ago", unit: "month" },
    { count: 3, label: "3 months ago", unit: "month" },
    { count: 6, label: "6 months ago", unit: "month" },
    { count: 1, label: "a year ago", unit: "year" },
    { count: 3, label: "3 years ago", unit: "year" },
    { count: 5, label: "5 years ago", unit: "year" },
    { count: 10, label: "10 year ago", unit: "year" },
  ],

  hnPageSize: 30,
  hnBase: "https://hacker-news.firebaseio.com/v0/",
  hnSearchBase: "https://hn.algolia.com/api/v1",
  hnSort: [
    { key: "search", label: "By relevance" },
    { key: "search_by_date", label: "By date" },
  ],
  hnSupportTags: [
    { key: "story", label: "Stories" },
    { key: "comment", label: "Comments" },
    { key: "poll", label: "Polls" },
    { key: "pollopt", label: "Pollopts" },
    { key: "show_hn", label: "Show" },
    { key: "ask_hn", label: "Ask" },
  ],
}
