"use client"

import { CopyIcon } from "lucide-react"
import { toast } from "sonner"
import config from "@/config"
import { Button } from "@/components/ui/button"

const { label, success, error } = config.copy

export function CopyButton({ value, className }: { value: string; className?: string }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(success)
    } catch {
      toast.error(error)
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      aria-label={label}
      title={label}
      onClick={copy}
      className={`text-muted-foreground shrink-0 cursor-pointer ${className ?? ""}`}>
      <CopyIcon />
    </Button>
  )
}
