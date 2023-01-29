import { Container } from "./style";

interface IDescription {
  description: string;
}

const Description = ({ description }: IDescription) => {
  return (
    <Container>
      <h4>Descrição</h4>

      <p>{description}</p>
    </Container>
  );
};

export { Description };
