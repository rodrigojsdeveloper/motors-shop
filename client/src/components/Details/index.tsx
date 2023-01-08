import { IAuctionProps, IProductProps } from "../../interfaces";
import { Button } from "../Button";
import { Container } from "./style";

interface IDetails {
  product: IAuctionProps | IProductProps
}

const Details = ({ product }: IDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  return (
    <Container>
      <h3>{ product.description }</h3>

      <div>
        <div>
          <p>{ product.year }</p>
          <p>{ product.kilometers } KM</p>
        </div>

        <span>{ product.price }</span>
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
