import { Container } from "./style";

interface ITextArea {
  value?: string;
}

const TextArea = ({ value }: ITextArea) => {
  return (
    <Container>
      <label>Descrição</label>
      <textarea placeholder="Digitar descrição" value={ value } />
    </Container>
  );
};

export { TextArea };
