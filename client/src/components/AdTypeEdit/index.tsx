import { Container } from "../AdType/style";
import { IAdType } from "../../interfaces";
import { Button } from "../Button";
import { useState } from "react";

const AdTypeEdit = ({ setSaleOrAuctionAdType, ad_type }: IAdType) => {
  const [changeColorSale, setChangeColorSale] = useState<boolean>(true);

  const [changeColorAuction, setChangeColorAuction] = useState<boolean>(false);

  return (
    <Container>
      <h4>Tipo de anúncio</h4>
      <div>
        <Button
          onClick={() => {
            setChangeColorSale(true);
            setChangeColorAuction(false);
            setSaleOrAuctionAdType(true);
          }}
          style={
            ad_type == "sale"
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
            setChangeColorSale(false);
            setChangeColorAuction(true);
            setSaleOrAuctionAdType(false);
          }}
          style={
            ad_type == "auction"
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

export { AdTypeEdit };
