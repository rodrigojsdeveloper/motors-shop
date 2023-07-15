import { Container, InputContainer } from "./style";
import { InputProps } from "../../interfaces";

const Input = ({
  type,
  name,
  register,
  error,
  label,
  placeholder,
  onChange,
  size,
  className,
  value,
  disabled,
  defaultValue,
}: InputProps) => {
  return (
    <Container className={className}>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>

      <InputContainer
        value={value}
        size={size}
        type={type}
        {...register(name)}
        autoComplete="off"
        placeholder={placeholder}
        required={true}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

export { Input };
