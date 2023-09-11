import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IUserProps, IUserContextData, IChildren } from "../interfaces";

export const UserContext = createContext({} as IUserContextData);

export const UserContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("NG.CASH: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  useEffect(() => {
    api
      .get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
