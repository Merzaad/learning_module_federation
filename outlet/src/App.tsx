import "./App.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App(props: any) {
  const toggleSidebar = () => {
    props.eventManager.publish({
      type: "TEST",
      payload: {
        collapsed: true,
      },
    })
  }
  return (
    <>
      <main id="outlet">
        Outlet
        <button onClick={toggleSidebar}>TEST</button>
      </main>
    </>
  )
}

export default App
