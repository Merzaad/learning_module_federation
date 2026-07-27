/// <reference types="vite/client" />

declare module "layout/layout" {
  export function layout(target: HTMLElement, props: any): unknown;
}

interface OutletProps {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

declare module "outlet/outlet" {
  import type { ComponentType } from "react";

  const App: ComponentType<OutletProps>;
  export default App;
}
