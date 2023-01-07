import { Button } from "../Button";
import { Container } from "./style";

const CardSeller = () => {
  return (
    <Container>
      <div>
        <img src="https://i.pinimg.com/originals/07/27/27/07272766e2fc55ea363b3655ddf00f4e.jpg" />
        <h4>Rodrigo Silva</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>

        <Button
          size="buttonSizeProductDetails"
          color="buttonColorBlackProductDetails"
          type="button"
        >
          Ver todos anuncios
        </Button>
      </div>
    </Container>
  );
};

export { CardSeller };
