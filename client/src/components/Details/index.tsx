import { Button } from "../Button";
import { Container } from "./style";

const Details = () => {
  const token = true;

  return (
    <Container>
      <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>

      <div>
        <div>
          <p>2013</p>
          <p>0 KM</p>
        </div>

        <span>R$ 00.000,00</span>
      </div>

      {token && (
        <Button
          size="buttonSizeProductCarDetails"
          color="buttonColorBlueLogin"
          type="button"
        >
          Comprar
        </Button>
      )}
    </Container>
  );
};

export { Details };
