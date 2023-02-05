import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface IAdTypeEdit {
  setBuyerOrAdvertiserAdType: React.Dispatch<React.SetStateAction<boolean>>;
  ad_type: string;
}

const AdTypeEdit = ({ setBuyerOrAdvertiserAdType, ad_type }: IAdTypeEdit) => {
  const [changeColorBuyer, setChangeColorBuyer] = useState<boolean>(true);

  const [changeColorAdvertiser, setChangeColorAdvertiser] =
    useState<boolean>(false);

  return (
    <Container>
      <h4>Tipo de anúncio</h4>
      <div>
        <Button
          onClick={() => {
            setChangeColorBuyer(true);
            setChangeColorAdvertiser(false);
            setBuyerOrAdvertiserAdType(true);
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
            setChangeColorBuyer(false);
            setChangeColorAdvertiser(true);
            setBuyerOrAdvertiserAdType(false);
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
