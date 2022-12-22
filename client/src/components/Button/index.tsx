import { IButtonProps } from "../../interfaces"
import { Container } from "./style"


const Button = ({ children, size, color, disabled, onClick, type }: IButtonProps) => {

    return (
        <Container size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type }>
            { children }
        </Container>
    )
}

export { Button }
