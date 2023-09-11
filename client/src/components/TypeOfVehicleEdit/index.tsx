import { ITypeOfVehicle } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const TypeOfVehicleEdit = ({
  setBuyerOrAdvertiserVehicleType,
  vehicle_type,
}: ITypeOfVehicle) => {
  const [changeColorBuyerVehicleType, setChangeColorBuyerVehicleType] =
    useState<boolean>(true);

  const [
    changeColorAdvertiserVehicleType,
    setChangeColorAdvertiserVehicleType,
  ] = useState<boolean>(false);

  return (
    <Container>
      <h4>Tipo de veículo</h4>
      <div>
        <Button
          onClick={() => {
            setChangeColorBuyerVehicleType(true);
            setChangeColorAdvertiserVehicleType(false);
            setBuyerOrAdvertiserVehicleType(true);
          }}
          style={
            vehicle_type == "car"
              ? { backgroundColor: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { backgroundColor: "#fff", color: "#000", borderColor: "#ADB5BD" }
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
            setChangeColorBuyerVehicleType(false);
            setChangeColorAdvertiserVehicleType(true);
            setBuyerOrAdvertiserVehicleType(false);
          }}
          style={
            vehicle_type == "motorcycle"
              ? { backgroundColor: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { backgroundColor: "#fff", color: "#000", borderColor: "#ADB5BD" }
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

export { TypeOfVehicleEdit };
