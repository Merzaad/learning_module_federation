import { mount } from "svelte"
import Layout from "./Layout.svelte"

export function layout(target: HTMLElement) {
  return mount(Layout, { target })
}
