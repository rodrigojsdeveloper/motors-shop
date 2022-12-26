import { Button } from "../Button"
import { Container } from "./style"


const Banner = () => {

    return (
        <Container>
            <h1>Velocidade e experiência em um lugar feito para você</h1>

            <p>Um ambiente feito para você explorar o seu melhor</p>

            <div>
                <a href="#carsAndMotorcycles">
                    <Button size="buttonSizeBanner" color="buttonColorBlueBanner" type="button">Carros</Button>
                </a>
                <a href="#carsAndMotorcycles">
                    <Button size="buttonSizeBanner" color="buttonColorBlueBanner" type="button">Motos</Button>
                </a>
            </div>
        </Container>
    )
}

export { Banner }
