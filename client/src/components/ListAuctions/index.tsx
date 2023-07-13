import { IAuctionProps, IListAuctions } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Auction } from "../Auction";
import { Container } from "./style";

const ListAuction = ({ auctions }: IListAuctions) => {
  return (
    <Container id="auctions">
      <TitleList title="Leilão" />

      <menu>
        {auctions.length > 0 ? (
          auctions.map((auction: IAuctionProps) => (
            <Auction auction={auction} key={auction.id} />
          ))
        ) : (
          <EmptyMessage message="Não há leiloẽs" />
        )}
      </menu>
    </Container>
  );
};

export { ListAuction };
