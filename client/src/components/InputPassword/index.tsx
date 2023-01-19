import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./style";

export interface InputPasswordProps {
  type?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required?: boolean | undefined;
  onChange?: any;
  value?: any;
  disabled?: boolean;
  size?: string;
  setTypeInput: React.Dispatch<React.SetStateAction<boolean>>;
  showOutlineShow: boolean;
  setShowOutlineShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputPassword = ({
  type,
  name,
  register,
  autoComplete,
  error,
  label,
  placeholder,
  required,
  onChange,
  value,
  disabled,
  setTypeInput,
  showOutlineShow,
  setShowOutlineShow,
}: InputPasswordProps) => {
  return (
    <Container>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>

      <div className="inputPassword">
        <input
          value={value}
          type={type}
          {...register(name)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          disabled={disabled}
        />
        {showOutlineShow ? (
          <AiOutlineEyeInvisible
            className="biShow"
            onClick={() => {
              setTypeInput(true);

              setShowOutlineShow(false);
            }}
          />
        ) : (
          <AiOutlineEye
            className="biShow"
            onClick={() => {
              setTypeInput(false);

              setShowOutlineShow(true);
            }}
          />
        )}
      </div>
    </Container>
  );
};

export { InputPassword };
