import { Button } from "../Button"
import { Container } from "./style"


const Banner = () => {

    return (
        <Container>
            <h1>Velocidade e experiência em um lugar feito para você</h1>

            <p>Um ambiente feito para você explorar o seu melhor</p>

            <div>
                <Button size="buttonSizeBanner" color="buttonColorBlueBanner" type="button">Carros</Button>
                <Button size="buttonSizeBanner" color="buttonColorBlueBanner" type="button">Motos</Button>
            </div>
        </Container>
    )
}

export { Banner }
