import { AuctionContext } from "../../contexts/AuctionContext";
import { EmptyMessage } from "../EmptyMessage";
import { IBidProps } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";
import { Bid } from "../Bid";

const ListBids = () => {
  const { bidsList, loadingBids } = useContext(AuctionContext);

  return (
    <Container>
      <h3>Lances</h3>

      <menu>
        {loadingBids ? (
          <div className="loadScreen">
            <div></div>
          </div>
        ) : bidsList.length > 0 ? (
          bidsList.map((bid: IBidProps) => <Bid bid={bid} key={bid.id} />)
        ) : (
          <EmptyMessage message="Não há lances" />
        )}
      </menu>
    </Container>
  );
};

export { ListBids };
