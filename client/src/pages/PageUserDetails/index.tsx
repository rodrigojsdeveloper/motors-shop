import { Header } from "../../components/Header"
import { UserDetails } from "../../components/UserDetails"
import { Container } from "./style"

const PageUserDetails = () => {

    return (
        <Container>
            <Header />

            <div></div>
            <div>
                <UserDetails />
                
            </div>
        </Container>
    )
}

export { PageUserDetails }
