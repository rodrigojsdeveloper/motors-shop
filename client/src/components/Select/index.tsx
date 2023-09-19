import { ISelectProps } from "../../interfaces";
import { Container } from "./style";

const Select = ({ register, name }: ISelectProps) => {
  return (
    <Container>
      <label>Combustível</label>

      <select {...register(name)} defaultValue={"Escolha o combustível"}>
        <option disabled>Escolha o combustível</option>
        <option value="gasoline">Gasolina</option>
        <option value="ethanol">Etanol</option>
      </select>
    </Container>
  );
};

export { Select };
