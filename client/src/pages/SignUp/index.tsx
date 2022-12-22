import { Footer } from "../../components/Footer"
import { FormSignUp } from "../../components/FormSignUp"
import { HeaderNotLogged } from "../../components/HeaderNotLogged"
import { Container } from "./style"


const SignUp = () => {

    return (
        <Container>
            <HeaderNotLogged />

            <div>
                <FormSignUp />
            </div>

            <Footer />
        </Container>
    )
}

export { SignUp }
