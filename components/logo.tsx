import config from "@/config"
import { CylinderIcon } from "lucide-react"

export function Logo() {
  return (
    <a className="inline-flex items-center gap-1" aria-label="Home page" href="/">
      <p className="decoration-primary hidden text-xl font-bold decoration-2 underline-offset-4 hover:underline sm:block">
        {config.textName}
      </p>
      <CylinderIcon className="stroke-primary size-5" />
    </a>
  )
}
