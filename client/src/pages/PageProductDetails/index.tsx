import { CreateComment } from "../../components/CreateComment"
import { Footer } from "../../components/Footer"
import { HeaderNotLogged } from "../../components/HeaderNotLogged"
import { ListComments } from "../../components/ListComments"
import { ProductDetails } from "../../components/ProductDetails"
import { Container } from "./style"

const PageProductDetails = () => {

    return (
        <Container>
            <HeaderNotLogged />

            <div>
                <div className="divBlue"></div>
                <div className="divWhite">
                    <div>
                        <ProductDetails />
                        <ListComments />
                        <CreateComment />
                    </div>
                </div>
            </div>

            <Footer />
        </Container>
    )
}

export { PageProductDetails }
