import { ISelectEditProps } from "../../interfaces";
import { Container } from "./style";

const SelectEdit = ({ register, name, defaultValue }: ISelectEditProps) => {
  return (
    <Container>
      <label>Combustível</label>

      <select {...register(name)} defaultValue={defaultValue}>
        <option disabled>Escolha o combustível</option>
        <option value="gasoline">Gasolina</option>
        <option value="ethanol">Etanol</option>
      </select>
    </Container>
  );
};

export { SelectEdit };
