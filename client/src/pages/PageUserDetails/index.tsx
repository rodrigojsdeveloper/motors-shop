import { useState } from "react"
import { Header } from "../../components/Header"
import { UserDetails } from "../../components/UserDetails"
import { IUserProps } from "../../interfaces"
import { api } from "../../services/api"
import { Container } from "./style"

const PageUserDetails = () => {

    const [ user, setUser ] = useState<IUserProps>({} as IUserProps)

    api.post(`/users/${}`)
    .then(res => setUser(res.data))
    .catch(error => console.error(error))

    return (
        <Container>
            <Header />

            <div></div>
            <div>
                <UserDetails user={ user } />
            </div>
        </Container>
    )
}

export { PageUserDetails }
