import Person from "./components/Person";

function App() {
  return (
    <>
      <Person name="Omar" age={25} isMarried={false} />
      <Person name="John" age={26} isMarried={true} />
    </>
  );
}

export default App;
