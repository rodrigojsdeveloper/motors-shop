import { Footer } from "../../components/Footer"
import { FormSignIn } from "../../components/FormSignIn"
import { HeaderNotLogged } from "../../components/HeaderNotLogged"
import { Container } from "./style"


const SignIn = () => {

    return (
        <Container>
            <HeaderNotLogged />

            <div>
                <FormSignIn />
            </div>

            <Footer />
        </Container>
    )
}

export { SignIn }
