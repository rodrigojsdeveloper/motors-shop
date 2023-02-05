import { ITextAreaProps } from "../../interfaces";
import { Container } from "./style";

const TextArea = ({ value, name, register, error }: ITextAreaProps) => {
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
