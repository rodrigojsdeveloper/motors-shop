import { Container } from "./style";

const TextArea = () => {
  return (
    <Container>
      <label>Descrição</label>
      <textarea placeholder="Digitar descrição" />
    </Container>
  );
};

export { TextArea };
