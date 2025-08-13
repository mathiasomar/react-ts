import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialVaues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextInitialVaues);

interface Props {
  children: React.ReactNode;
}
export const UserContextProvider = ({ children }: Props) => {
  const [users, setusers] = useState<User[] | null>(null);
  useEffect(() => {
    setusers([
      { name: "Omar", age: 25, isMarried: false },
      { name: "John", age: 26, isMarried: true },
    ]);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (id: string) => null;
  const deleteUser = (id: string) => null;
  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
