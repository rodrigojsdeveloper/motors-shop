import { useState } from "react"
import { AvatarUser } from "../AvatarUser"
import { Button } from "../Button"
import { Container } from "./style"

const UserDetails = () => {

    const [ user, setUser ] = useState<any>()

    return (
        <Container>
            <AvatarUser userName={ user } />

            <div>
                <h2>Rodrigo</h2>
                <p>{ user.is_seller ? "Anúnciante" : "Comprador" }</p>
            </div>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <Button size="buttonSizeUserDetailsMedium" color="buttonColorWhiteUserDetails" type="button">Criar anúncio</Button>
        </Container>
    )
}

export { UserDetails }
