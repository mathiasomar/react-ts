// import { useContext } from "react";
// import { UserContext } from "../context/UserContextProvider";

type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
};

// enum
export enum Countries {
  Brazil = "Brazil",
  France = "France",
  India = "India",
  UnitedStates = "United States",
}

const User = ({ name, age, isMarried, country }: PersonProps) => {
  //   const {} = useContext(UserContext);
  return (
    <div>
      <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Married: {isMarried ? "Yes" : "No"}</p>
        <p>Country: {country}</p>
      </>
    </div>
  );
};

export default User;
