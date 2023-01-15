import { IAuctionProps, IProductProps } from "../../interfaces";
import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";

interface ITypeOfVehicle {
  product: IProductProps | IAuctionProps;
}

const TypeOfVehicle = ({ product }: ITypeOfVehicle) => {
  const [changeColorBuyerVehicleType, setChangeColorBuyerVehicleType] =
    useState<boolean>(true);

  const [
    changeColorAdvertiserVehicleType,
    setChangeColorAdvertiserVehicleType,
  ] = useState<boolean>(false);

  const [buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType] =
    useState<boolean>(true);

  return (
    <Container>
      <h4>Tipo de veículo</h4>
      <div>
        <Button
          onClick={() => {
            if (product.vehicle_type == "car") {
              setChangeColorBuyerVehicleType(true);
              setChangeColorAdvertiserVehicleType(false);
              setBuyerOrAdvertiserVehicleType(true);
            }

            setChangeColorBuyerVehicleType(true);
            setChangeColorAdvertiserVehicleType(false);
            setBuyerOrAdvertiserVehicleType(true);
          }}
          style={
            changeColorBuyerVehicleType
              ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { background: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Carro
        </Button>
        <Button
          onClick={() => {
            if (product.vehicle_type == "motorbike") {
              setChangeColorBuyerVehicleType(false);
              setChangeColorAdvertiserVehicleType(true);
              setBuyerOrAdvertiserVehicleType(false);
            }

            setChangeColorBuyerVehicleType(false);
            setChangeColorAdvertiserVehicleType(true);
            setBuyerOrAdvertiserVehicleType(false);
          }}
          style={
            changeColorAdvertiserVehicleType
              ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { background: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="buttonSizeSignUp"
          color="buttonColorWhiteSignUp"
          type="button"
          className="changeButton"
        >
          Moto
        </Button>
      </div>
    </Container>
  );
};

export { TypeOfVehicle };
