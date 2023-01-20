import { IAuctionProps, IListAuctions } from "../../interfaces";
import { AdvertiserAuction } from "../AdvertiserAuction";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";

const AdvertiserAuctionsList = ({ auctions }: IListAuctions) => {
  return (
    <Container>
      <h2>Leilão</h2>

      <menu>
        {auctions.length > 0 ? (
          auctions.map((auction: IAuctionProps) => (
            <AdvertiserAuction auction={auction} key={auction.id} />
          ))
        ) : (
          <EmptyMessage message="Não há leilões" />
        )}
      </menu>
    </Container>
  );
};

export { AdvertiserAuctionsList };
