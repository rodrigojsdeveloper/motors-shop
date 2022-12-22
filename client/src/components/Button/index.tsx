import { IButtonProps } from "../../interfaces"
import { Container } from "./style"


const Button = ({ children, size, color, disabled, onClick, type, className, style }: IButtonProps) => {

    return (
        <Container style={ style } className={ className } size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type }>
            { children }
        </Container>
    )
}

export { Button }
