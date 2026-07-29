import { lazy, Suspense } from "react"
import { useEventManager } from "../event-manager/presentation/event-manager-provider"
const OutletApp = lazy(() => import("outlet/outlet"))

export default function Outlet() {
  const eventManager = useEventManager()
  return (
    <Suspense fallback={<p className="loading">Loading outlet</p>}>
      <OutletApp eventManager={eventManager} />
    </Suspense>
  )
}
