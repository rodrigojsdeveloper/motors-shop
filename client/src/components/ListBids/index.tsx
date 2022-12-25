import { Bid } from "../Bid"
import { Container } from "./style"

const ListBids = () => {

    return (
        <Container>
            <h3>Lances</h3>

            <menu>
                <Bid />
                <Bid />
                <Bid />
                <Bid />
                <Bid />
                <Bid />
                <Bid />
                <Bid />
            </menu>
        </Container>
    )
}

export { ListBids }
