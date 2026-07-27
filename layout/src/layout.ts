import { mount } from "svelte";
import Layout from "./Layout.svelte";

export function layout(target: HTMLElement, props: any) {
  return mount(Layout, { target, props });
}
