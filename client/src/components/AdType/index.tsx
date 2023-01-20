import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface IAdType {
  setBuyerOrAdvertiser: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdType = ({ setBuyerOrAdvertiser }: IAdType) => {
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
