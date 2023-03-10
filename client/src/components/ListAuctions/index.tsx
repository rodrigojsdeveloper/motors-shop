import { HomeContext } from "../../contexts/HomeContext";
import { IAuctionProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { TitleList } from "../TitleList";
import { Auction } from "../Auction";
import { Container } from "./style";
import { useContext } from "react";

const ListAuction = () => {
  const { auctions } = useContext(HomeContext);

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
