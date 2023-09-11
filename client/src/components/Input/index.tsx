import { InputProps } from "../../interfaces";
import { Container } from "./style";

const Input = ({
  type,
  name,
  register,
  error,
  label,
  placeholder,
  onChange,
  className,
  value,
  disabled,
  defaultValue,
  maxLength,
}: InputProps) => {
  return (
    <Container className={className}>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>

      <input
        value={value}
        type={type}
        {...register(name)}
        autoComplete="off"
        placeholder={placeholder}
        required={true}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        maxLength={maxLength}
      />
    </Container>
  );
};

export { Input };
