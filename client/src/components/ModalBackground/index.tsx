import { FC, ReactNode } from "react";
import { Container } from "./style";

interface ModalBackgroundProps {
  children: ReactNode;
}

const ModalBackground: FC<ModalBackgroundProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
