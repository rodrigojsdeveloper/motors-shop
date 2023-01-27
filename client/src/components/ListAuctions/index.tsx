import { IListAuctions } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Auction } from "../Auction";
import { Container } from "./style";
import { TitleList } from "../TitleList";

const ListAuction = ({ auctions }: IListAuctions) => {
  return (
    <Container id="auctions">
      <TitleList title="Leilão" />

      <menu>
        {auctions.length > 0 ? (
          auctions.map((auction) => (
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
