import { useState } from "react";

type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
};

const Person = ({ name, age, isMarried }: PersonProps) => {
  //   const [showInfo, setShowinfo] = useState<boolean | null>(true);
  const [bio, setBio] = useState<string | null>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value);
  };

  return (
    <div>
      {/* {showInfo && (
        <>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Married: {isMarried ? "Yes" : "No"}</p>
        </>
      )} */}

      <p>
        {name} Bio: {!bio ? "No Bio Available" : bio}
      </p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Person;
