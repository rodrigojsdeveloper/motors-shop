import { FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./style";

interface ITextArea {
  value?: string;
  register?: UseFormRegister<FieldValues>;
  name?: string;
  error?: any;
}

const TextArea = ({ value, name, register, error }: ITextArea) => {
  return (
    <Container>
      <label>
        Descrição
        {!!error && <span> - {error}</span>}
      </label>
      <textarea
        placeholder="Digitar descrição"
        value={value}
        {...register(name)}
      />
    </Container>
  );
};

export { TextArea };
