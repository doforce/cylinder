import config from "@/config"
import { HNServer } from "@/components/hn/hn-server"

export default function IndexPage() {
  return <HNServer tab={config.hnMenu[0]} num={"1"} />
}
