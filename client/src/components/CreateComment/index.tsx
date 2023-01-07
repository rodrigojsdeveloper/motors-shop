import { Button } from "../Button"
import { Container } from "./style"

const CreateComment = () => {

    const token = false

    return (
        <Container>
            <div className="divUserPhotoAndName">
                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                <h4>Rodrigo de Jesus</h4>
            </div>

            <div className="divInputLarge">
                <textarea placeholder={ token ? "Digitar comentário" : "Carro muito confortável, foi uma ótima experiência de compra..."} />
                <Button size="buttonSizeProductCarDetails" color="buttonColorBlueLogin" type="button" disabled={ token }>Comentar</Button>
            </div>

            <div className="divReadyComments">
                <p>Gostei muito!</p>
                <p>Incrível</p>
                <p>Recomendarei para meus amigos!</p>
            </div>
        </Container>
    )
}

export { CreateComment }
