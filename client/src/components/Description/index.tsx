import { IDescription } from "../../interfaces";
import { Container } from "./style";

const Description = ({ description }: IDescription) => {
  return (
    <Container>
      <h4>Descrição</h4>

      <p>{description}</p>
    </Container>
  );
};

export { Description };
