import { IEmptyMessage } from "../../interfaces";
import { Container } from "./style";

const EmptyMessage = ({ message }: IEmptyMessage) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export { EmptyMessage };
