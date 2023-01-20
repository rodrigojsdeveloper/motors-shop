import { Container } from "./style";

interface IEmptyMessage {
  message: string;
}

const EmptyMessage = ({ message }: IEmptyMessage) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export { EmptyMessage };
