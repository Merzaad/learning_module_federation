import "./App.css";

interface Props {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}
function App(props: Props) {
  const increase = () => {
    props.setState((prev) => prev + 1);
  };
  return (
    <>
      <main id='outlet'>
        Outlet
        <button onClick={increase}>{props.state}</button>
      </main>
    </>
  );
}

export default App;
