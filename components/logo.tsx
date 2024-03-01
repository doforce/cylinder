import config from "@/config"
import { CylinderIcon } from "lucide-react"

export function Logo() {
  return (
    <a className="inline-flex items-center gap-1" aria-label="Home page" href="/">
      <p className="hidden text-xl font-bold decoration-primary decoration-2 underline-offset-4 hover:underline sm:block">
        {config.textName}
      </p>
      <CylinderIcon className="size-5 stroke-primary" />
    </a>
  )
}
