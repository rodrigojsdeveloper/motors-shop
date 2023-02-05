import { IAuctionProps, IListAuctions } from "../../interfaces";
import { AdvertiserAuction } from "../AdvertiserAuction";
import { Container } from "../ListAuctions/style";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";

const AdvertiserListAuctions = ({ auctions }: IListAuctions) => {
  return (
    <Container>
      <TitleList title="Leilão" />

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

export { AdvertiserListAuctions };
