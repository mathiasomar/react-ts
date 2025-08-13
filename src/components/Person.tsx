import { useState } from "react";

type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
};

const Person = ({ name, age, isMarried }: PersonProps) => {
  const [showInfo, setShowinfo] = useState<boolean | null>(true);
  const hundleClick = () => {
    setShowinfo((prev) => !prev);
  };
  return (
    <div>
      <button onClick={hundleClick}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
      {showInfo && (
        <>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Married: {isMarried ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
};

export default Person;
