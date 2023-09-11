import { ITypeOfVehicle } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";

const TypeOfVehicleEdit = ({
  setBuyerOrAdvertiserVehicleType,
  vehicle_type,
}: ITypeOfVehicle) => {
  return (
    <Container>
      <h4>Tipo de veículo</h4>
      <div>
        <Button
          onClick={() => setBuyerOrAdvertiserVehicleType(true)}
          style={
            vehicle_type == "car"
              ? {
                  backgroundColor: "#4529E6",
                  color: "#fff",
                  borderColor: "#4529E6",
                }
              : {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#ADB5BD",
                }
          }
          size="155.5px"
          color="white"
          type="button"
          className="changeButton"
        >
          Carro
        </Button>
        <Button
          onClick={() => setBuyerOrAdvertiserVehicleType(false)}
          style={
            vehicle_type == "motorcycle"
              ? {
                  backgroundColor: "#4529E6",
                  color: "#fff",
                  borderColor: "#4529E6",
                }
              : {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#ADB5BD",
                }
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

export { TypeOfVehicleEdit };
