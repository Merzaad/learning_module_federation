/// <reference types="vite/client" />

declare module "layout/layout" {
  export function layout(target: HTMLElement): unknown
}

declare module "outlet/App" {
  import type { ComponentType } from "react"
  const App: ComponentType
  export default App
}
