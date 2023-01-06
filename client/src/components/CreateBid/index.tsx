import { useForm } from "react-hook-form"
import { AvatarUser } from "../AvatarUser"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"

const CreateBid = () => {

    const { register } = useForm({})

    return (
        <Container>
            <div>
                <div>
                    <AvatarUser userName="Rodrigo Silva" />
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
                    register={ register }
                    name="label"
                    />

                    <Button color="buttonColorBlueLogin" size="buttonSizeCreateBid" type="button">Inserir proposta</Button>
                </div>
            </div>
        </Container>
    )
}

export { CreateBid }
