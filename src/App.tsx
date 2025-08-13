import User from "./components/Person";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <User name="Omar" age={25} isMarried={false} />
      <User name="John" age={26} isMarried={true} />
    </UserContextProvider>
  );
}

export default App;
