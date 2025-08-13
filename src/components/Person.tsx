import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
};

const User = ({ name, age, isMarried }: PersonProps) => {
  const {} = useContext(UserContext);
  return (
    <div>
      <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Married: {isMarried ? "Yes" : "No"}</p>
      </>
    </div>
  );
};

export default User;
