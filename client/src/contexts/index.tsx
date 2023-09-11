import { ProductContextProvider } from "./product.context";
import { UserContextProvider } from "./user.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return (
    <UserContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </UserContextProvider>
  );
};

export { Providers };
