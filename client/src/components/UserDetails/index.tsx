import { useState } from "react"
import { IUserProps } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"
import { Button } from "../Button"
import { Container } from "./style"

interface IUserDetails {
    user: IUserProps
}

const UserDetails = ({ user }: IUserDetails) => {

    return (
        <Container>
            <AvatarUser userName={ user.name } />

            <div>
                <h2>{ user.name }</h2>
                <p>{ user.is_seller ? "Anúnciante" : "Comprador" }</p>
            </div>

            <p>{ user.description }</p>

            <Button size="buttonSizeUserDetailsMedium" color="buttonColorWhiteUserDetails" type="button">Criar anúncio</Button>
        </Container>
    )
}

export { UserDetails }
