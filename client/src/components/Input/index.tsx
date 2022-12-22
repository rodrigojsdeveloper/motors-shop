import { InputProps } from "../../interfaces"
import { Container, InputContainer } from "./style"

const Input = ({ type, name, register, autoComplete, error, label, placeholder, required, onChange, size, className }: InputProps) => {

    return (
        <Container className={ className }>
            <label>{ label } { !!error && <span> - { error }</span> }</label>

            <InputContainer size={ size } type={ type } { ...register(name) } autoComplete={ autoComplete } placeholder={ placeholder } required={ required } onChange={ onChange } />
        </Container>
    )
}

export { Input }
