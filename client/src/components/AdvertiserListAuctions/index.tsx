import { AdvertiserContext } from "../../contexts/AdvertiserContext";
import { AdvertiserAuction } from "../AdvertiserAuction";
import { Container } from "../ListAuctions/style";
import { IAuctionProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { useContext } from "react";

const AdvertiserListAuctions = () => {
  const { auctions } = useContext(AdvertiserContext);

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
