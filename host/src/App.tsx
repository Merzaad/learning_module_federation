import "./App.css";
import Layout from "./components/layout";
import Outlet from "./components/outlet";
import { EventProvider } from "./context/events";

export default function App() {
  return (
    <div className='app-shell'>
      <div className='app-shell-title'>app-shell</div>
      <main>
        <EventProvider>
          <Layout />
          <Outlet />
        </EventProvider>
      </main>
    </div>
  );
}
