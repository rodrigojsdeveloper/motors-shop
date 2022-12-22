import { Banner } from "../../components/Banner"
import { Footer } from "../../components/Footer"
import { HeaderNotLogged } from "../../components/HeaderNotLogged"
import { ListCardAuction } from "../../components/ListCardsAuction"
import { ListProducts } from "../../components/ListProducts"
import { Container } from "./style"

const Home = () => {

    return (
        <Container>
            <HeaderNotLogged />
            <Banner />
            <ListCardAuction />
            <ListProducts
            listName="Carros"
            />
            <ListProducts
            listName="Motos"
            />
            <Footer />
        </Container>
    )
}

export { Home }
