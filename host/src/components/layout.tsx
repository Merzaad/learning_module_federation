import { useEffect } from "react";
import { useEventContext } from "../context/events";

export default function Layout() {
  const { state } = useEventContext();
  useEffect(() => {
    async function mountLayout() {
      const target = document.getElementById("layout");
      if (!target) return;
      const mod = await import("layout/layout");
      target.replaceChildren();
      mod.layout(target, { state });
    }

    mountLayout();
  }, [state]);
  return <div id='layout' className='layout' />;
}
