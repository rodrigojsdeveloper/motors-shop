import { ITypeOfVehicle } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const TypeOfVehicle = ({ setBuyerOrAdvertiserVehicleType }: ITypeOfVehicle) => {
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
            changeColorBuyerVehicleType
              ? { backgroundColor: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { backgroundColor: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="155.5px"
          color="white"
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
            changeColorAdvertiserVehicleType
              ? { backgroundColor: "#4529E6", color: "#fff", borderColor: "#4529E6" }
              : { backgroundColor: "#fff", color: "#000", borderColor: "#ADB5BD" }
          }
          size="155.5px"
          color="white"
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
