import { lazy, Suspense, useEffect } from "react"
import "./App.css"

const OutletApp = lazy(() => import("outlet/App"))

export default function App() {
  useEffect(() => {
    async function mountLayout() {
      const target = document.getElementById("layout")
      if (!target) return

      const mod = await import("layout/layout")
      console.log(mod)
      target.replaceChildren()
      mod.layout(target)
    }

    mountLayout()
  }, [])

  return (
    <div className="app-shell">
      <div className="app-shell-title">app-shell</div>
      <div id="layout" className="layout" />
      <main>
        <Suspense fallback={<p className="loading">Loading outlet</p>}>
          <OutletApp />
        </Suspense>
      </main>
    </div>
  )
}
