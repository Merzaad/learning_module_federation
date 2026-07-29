import { useEffect } from "react"
import { useEventManager } from "../event-manager/presentation/event-manager-provider"

export default function Layout() {
  const eventManager = useEventManager()
  useEffect(() => {
    async function mountLayout() {
      const target = document.getElementById("layout")
      if (!target) return
      const mod = await import("layout/layout")
      target.replaceChildren()
      mod.layout(target, { eventManager })
    }

    mountLayout()
  }, [eventManager])
  return <div id="layout" className="layout" />
}
