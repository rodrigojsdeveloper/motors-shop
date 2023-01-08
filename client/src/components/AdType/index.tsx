import { useState } from "react";
import { IAuctionProps, IProductProps } from "../../interfaces";
import { Button } from "../Button";
import { Container } from "./style";

interface IAdType {
  product: IAuctionProps | IProductProps;
}

const AdType = ({ product }: IAdType) => {
  const [changeColorBuyer, setChangeColorBuyer] = useState<boolean>(true);

  const [changeColorAdvertiser, setChangeColorAdvertiser] =
    useState<boolean>(false);

  const [buyerOrAdvertiser, setBuyerOrAdvertiser] = useState<boolean>(true);

  return (
    <Container>
      <h4>Tipo de anúncio</h4>
      <div>
        <Button
          onClick={() => {
            if (product.ad_type == "sale") {
              setChangeColorBuyer(true);
              setChangeColorAdvertiser(false);
              setBuyerOrAdvertiser(true);
            }

            setChangeColorBuyer(true);
            setChangeColorAdvertiser(false);
            setBuyerOrAdvertiser(true);
          }}
          style={
            changeColorBuyer
              ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { background: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Venda
        </Button>
        <Button
          onClick={() => {
            if (product.ad_type == "auction") {
              setChangeColorBuyer(false);
              setChangeColorAdvertiser(true);
              setBuyerOrAdvertiser(false);
            }

            setChangeColorBuyer(false);
            setChangeColorAdvertiser(true);
            setBuyerOrAdvertiser(false);
          }}
          style={
            changeColorAdvertiser
              ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { background: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Leilão
        </Button>
      </div>
    </Container>
  );
};

export { AdType };
