import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"

const CreateBid = () => {

    return (
        <Container>
            <div>
                <img src="" />
                <h3>Rodrigo Silva</h3>
            </div>

            <div>
                <Input
                label="Lance"
                placeholder="Inserir valor do lance"
                autoComplete="off"
                type="text"
                required={ true }
                size="inputSignIn"
                />

                <Button color="buttonColorBlueLogin" size="buttonSizeSuccessModal" type="button">Inserir proposta</Button>
            </div>
        </Container>
    )
}

export { CreateBid }
