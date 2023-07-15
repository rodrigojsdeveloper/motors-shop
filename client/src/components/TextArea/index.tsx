import { ITextAreaProps } from "../../interfaces";
import { Container } from "./style";

const TextArea = ({ defaultValue, name, register, error }: ITextAreaProps) => {
  return (
    <Container>
      <label>
        Descrição
        {!!error && <span> - {error}</span>}
      </label>
      <textarea
        placeholder="Digitar descrição"
        defaultValue={defaultValue}
        {...register(name)}
      />
    </Container>
  );
};

export { TextArea };
