import "./App.css"
import Layout from "./components/layout"
import Outlet from "./components/outlet"
import { EventManagerProvider } from "./event-manager/presentation/event-manager-provider"

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-shell-title">app-shell</div>
      <main>
        <EventManagerProvider>
          <Layout />
          <Outlet />
        </EventManagerProvider>
      </main>
    </div>
  )
}
