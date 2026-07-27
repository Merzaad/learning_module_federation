import { lazy, Suspense } from "react";
import { useEventContext } from "../context/events";
const OutletApp = lazy(() => import("outlet/outlet"));

export default function Outlet() {
  const { state, setState } = useEventContext();
  return (
    <Suspense fallback={<p className='loading'>Loading outlet</p>}>
      <OutletApp state={state} setState={setState} />
    </Suspense>
  );
}
