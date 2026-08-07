import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App(props: any) {
  const set = () => {
    props.eventManager.publish({
      type: "setState",
      payload: "test",
    });
  };
  const rest = () => {
    props.eventManager.publish({
      type: "reset",
      payload: null,
    });
  };
  return (
    <>
      <main id='outlet'>
        Outlet
        <button onClick={set}>setState("test")</button>
        <button onClick={rest}>reset</button>
      </main>
    </>
  );
}

export default App;
