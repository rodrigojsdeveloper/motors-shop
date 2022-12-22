import { InputProps } from "../../interfaces"
import { Container, InputContainer } from "./style"

const Input = ({ type, name, register, autoComplete, error, label, placeholder, required, onChange }: InputProps) => {

    return (
        <Container>
            <label>{ label } { !!error && <span> - { error }</span> }</label>

            <InputContainer type={ type } { ...register(name) } autoComplete={ autoComplete } placeholder={ placeholder } required={ required } onChange={ onChange } />
        </Container>
    )
}

export { Input }
