export interface HNItem {
  id: number
  type: "story" | "comment" | "poll" | "pollopt" | "job"
  by: string
  /**Creation date of the item, in Unix Time */
  time: number
  /**the comment, story or poll text. HTML. */
  title: string
  deleted?: boolean
  text?: string
  dead?: boolean
  url?: string
  score?: number
  /** The comment's parent: either another comment or the relevant story. */
  parent?: number
  /** In the case of stories or polls, the total comment count. */
  descendants?: number
}

export interface HNSearchResult {
  exhaustive: {
    nbHits: boolean
    typo: boolean
  }
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  hits: HNSearchHit[]
  hitsPerPage: number
  nbHits: number
  nbPages: number
  page: number
  params: string
  processingTimeMS: number
  processingTimingsMS: {
    _request: {
      queue: number
      roundTrip: number
    }
    afterFetch: {
      merge: {
        total: number
      }
      total: number
    }
    fetch: {
      query: number
      total: number
    }
    total: number
  }
  query: string
  serverTimeMS: number
}

export interface HNSearchHit extends HNSearchComment, HighlightResult {
  _tags: Array<string>
  author: string
  created_at_i: number
  num_comments?: number
  points: number
  story_id: number
  title: string
  url: string
  query: string
}

export interface HighlightResult {
  _highlightResult: {
    author: SearchMatch
    comment_text: SearchMatch
    story_title: SearchMatch
    story_url: SearchMatch
  }
}

export interface SearchMatch {
  matchLevel: string
  matchedWords: string[]
  value: string
}

export interface HNSearchComment {
  story_url: string
  comment_text: string
  story_title: string
}
