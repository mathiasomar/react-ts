import User from "./components/Person";
import { Countries } from "./components/Person";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <User name="Omar" age={25} isMarried={false} country={Countries.Brazil} />
      <User name="John" age={26} isMarried={true} country={Countries.France} />
    </UserContextProvider>
  );
}

export default App;
