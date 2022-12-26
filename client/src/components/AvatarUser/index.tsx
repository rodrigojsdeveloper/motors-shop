import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./style"

interface IAvatarUserProps {
    userName: string
}

const AvatarUser = ({ userName }: IAvatarUserProps) => {

    return (
        <Container>
            {
                userName.split(" ").length == 1 ? (
                    <p>{ userName[0] }</p>                    
                ) : (
                    <>
                        <p>{ userName[0][0] }</p>
                        <p>{ userName[1][0] }</p>
                    </>    
                )
            }
        </Container>
    )
}

export { AvatarUser }
