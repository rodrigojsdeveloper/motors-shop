import { IAuctionProps, IListAuctions } from "../../interfaces";
import { AdvertiserAuction } from "../AdvertiserAuction";
import { Container } from "./style";

const AdvertiserAuctionsList = ({ auctions }: IListAuctions) => {
  return (
    <Container>
      <h2>Leilão</h2>

      <menu>
        {auctions.map((auction: IAuctionProps) => (
          <AdvertiserAuction auction={auction} key={auction.id} />
        ))}
      </menu>
    </Container>
  );
};

export { AdvertiserAuctionsList };
