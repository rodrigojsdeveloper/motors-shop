import { IBid } from "../../interfaces"
import { Container } from "./style"
import { Bid } from "../Bid"

interface IListBids {
    bids: IBid[]
}

const ListBids = ({ bids }: IListBids) => {

    return (
        <Container>
            <h3>Lances</h3>

            <menu>
                {
                    bids.map(b => <Bid bid={ b } />)
                }
            </menu>
        </Container>
    )
}

export { ListBids }
