import { IChildren } from "../../interfaces";
import { Container } from "./style";
import { FC } from "react";

const ModalBackground: FC<IChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
