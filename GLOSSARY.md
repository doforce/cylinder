# Cylinder HN

A web client for Hacker News: browse the six story lists and search all of Hacker News. This glossary fixes the vocabulary of the Hacker News domain as this project models it.

## Language

### Hacker News items

**Item** — The unit Hacker News returns for a single id; every story, comment, poll, poll option and job is an item.
_Avoid_: post, entry, record

**Story** — An item of type `story`: a headline, a link and a score, and the thing the story lists show.
_Avoid_: post, article, thread

**Comment** — An item of type `comment`, carrying its body in `text`.
_Avoid_: reply, message

**Poll / Poll option** — An item of type `poll` together with its `pollopt` children; both appear only as search tags, never in a story list.
_Avoid_: survey, vote

**Job** — An item of type `job`, a hiring post; it appears only in the `jobstories` list and in search.
_Avoid_: listing, vacancy

### Story lists

**Tab** — One of the six fixed story lists (`topstories`, `newstories`, `beststories`, `showstories`, `askstories`, `jobstories`), and the first URL segment that selects it.
_Avoid_: feed, category, section

**`num`** — The 1-based position of a page inside a tab: `/topstories/1` is the first page.
_Avoid_: page, index, offset

**Page size** — The fixed count of items one page holds, shared by story lists and search.
_Avoid_: limit, per page

### Search

**Hit** — One Algolia search result: a flattened projection carrying story fields and comment fields together. Not an Item.
_Avoid_: result, match, item

**`page`** — The 0-based position of a result page in Algolia paging; it is one less than the equivalent `num`.
_Avoid_: num, index

**Query** — The full state of one search: sort, text, tags, the from/to range, and the page.
_Avoid_: search, filter, params

**Sort** — Which order Algolia returns hits in: by relevance (`search`) or by date (`search_by_date`).
_Avoid_: order, ranking

**Tag** — Algolia's item-type filter for a search (`story`, `comment`, `poll`, `pollopt`, `show_hn`, `ask_hn`), plus an `all` choice that means no filter.
_Avoid_: type, category, filter

**Highlight** — Algolia's marking of where the query terms matched inside a field's text.
_Avoid_: snippet, excerpt

**From / To date** — The search date range: hits created at or after the start of the From day, and strictly before the start of the day after To.
_Avoid_: start, end, period

### Presets

**Date preset** — A relative shortcut in the date picker, stored as a count plus a unit ("yesterday" is one day back) and resolved to a concrete date when chosen.
_Avoid_: quick range, shortcut, offset

**Search preset** — A search phrase offered from configuration, identical for every visitor.
_Avoid_: saved search, favorite, tag

**Custom preset** — A search phrase the visitor added themselves, kept in their own browser.
_Avoid_: saved search, bookmark

## Confusable pairs

- **`num` vs `page`** — `num` is 1-based in the URL; Algolia's `page` is 0-based. The first page is `num=1` and `page=0`.
- **Tab vs Tag** — A tab picks a story list; a tag filters search results by item type.
- **Hit vs Item** — An Item is what Hacker News stores; a Hit is what Algolia returns for a search.
- **`title` vs `text`** — A story's headline is `title`; a comment's body is `text`.
- **Date preset vs Search preset** — Both are called "preset" and share nothing: one is a relative date, the other a saved phrase.
