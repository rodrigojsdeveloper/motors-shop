import { IUserProps, IUserContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContextData);

export const UserContextProvider = ({ children }: IChildren) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const handleEditUser = (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    user: IUserProps,
    data: any,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoad(true);

    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setOpenModal(false))
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
    }, [handleEditUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleEditUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
