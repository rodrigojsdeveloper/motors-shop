import { useState } from "react"
import { useForm } from "react-hook-form"
import { IAuctionProps, IBid } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"

interface ICreateBid {
    product: IAuctionProps
    ListBidsFunc: (bid: IBid) => void
}

const CreateBid = ({ product , ListBidsFunc }: ICreateBid) => {

    const [ disable, setDisable ] = useState<boolean>(false)

    const { register, handleSubmit } = useForm({})

    const token = sessionStorage.getItem("Motors shop: token")

    if(token) {
        setDisable(false)
    } else {
        setDisable(true)
    }

    const onSubmitFunction = (data: any) => ListBidsFunc(data)

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            <div>
                <div>
                    <AvatarUser userName={ product.user.name } />
                    <h3>{ product.user.name }</h3>
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

                    <Button color="buttonColorBlueLogin" size="buttonSizeCreateBid" type="submit" disabled={ disable }>Inserir proposta</Button>
                </div>
            </div>
        </Container>
    )
}

export { CreateBid }
