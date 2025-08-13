type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
};

const Person = ({ name, age, isMarried }: PersonProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Married: {isMarried ? "Yes" : "No"}</p>
    </div>
  );
};

export default Person;
