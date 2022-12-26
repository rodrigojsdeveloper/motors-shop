import { IAuctionProps, IListAuctions } from "../../interfaces"
import { Auction } from "../Auction"
import { Container } from "./style"

const ListAuction = ({ auctions }: IListAuctions) => {

    return (
        <Container>
            <h2>Leilão</h2>

            <menu>
                {
                    auctions.map((auction: IAuctionProps) => <Auction auction={ auction } key={ auction.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListAuction }
