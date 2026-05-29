/// <reference types="bun-types" />

import { expect, test } from "bun:test"
import { renderToStaticMarkup } from "react-dom/server"

import { Calendar } from "./calendar"

function classNameForClass(html: string, className: string) {
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = html.match(
    new RegExp(`<[^>]*class="([^"]*\\b${escaped}\\b[^"]*)"[^>]*>`)
  )

  return match?.[1] ?? ""
}

function tagForDataDay(html: string, day: string) {
  const escaped = day.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return html.match(new RegExp(`<td\\b[^>]*data-day="${escaped}"[^>]*>`))?.[0] ?? ""
}

function classNameFromTag(tag: string) {
  return tag.match(/\bclass="([^"]*)"/)?.[1] ?? ""
}

test("uses current react-day-picker class names for weekday and day layout", () => {
  const html = renderToStaticMarkup(
    <Calendar mode="single" defaultMonth={new Date(2026, 4, 1)} />
  )

  expect(classNameForClass(html, "rdp-weekdays")).toContain("flex")
  expect(classNameForClass(html, "rdp-weekday")).toContain("flex-1")

  const mayFirstClasses = classNameFromTag(tagForDataDay(html, "2026-05-01"))

  expect(mayFirstClasses).toContain("text-center")
  expect(mayFirstClasses).not.toContain("inline-flex")
  expect(mayFirstClasses).not.toContain("whitespace-nowrap")
})
