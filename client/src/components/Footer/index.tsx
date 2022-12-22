import logo from "../../assets/Motors shop footer.svg"
import { Button } from "../Button"
import { Container } from "./style"


const Footer = () => {

    return (
        <Container>
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <p>© 2022 -  Todos os direitos reservados.</p>
            
            <a href="#top">
                <Button onClick={ () => window.scrollY = 0 } size="buttonSizeFooter" color="buttonColorGrayFooter" type="button">^</Button>
            </a>
        </Container>
    )
}

export { Footer }
