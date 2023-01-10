import { Container } from "./style"

interface IAvatarUserProps {
    userName: any
}

const AvatarUser = ({ userName }: IAvatarUserProps) => {

    return (
        <Container>
            {
                userName.split(" ").length == 1 ? (
                    <p>{ userName[0] }</p>                    
                ) : (
                    <>
                        <p>{ userName[0] }</p>
                        <p>{ userName.split(" ")[1][0] }</p>
                    </>    
                )
            }
        </Container>
    )
}

export { AvatarUser }
