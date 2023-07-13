import { IBidProps, IListBids } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { Container } from "./style";
import { Bid } from "../Bid";

const ListBids = ({ bids, loaded, auction }: IListBids) => {
  return (
    <Container>
      <h3>Lances</h3>

      <menu>
        {loaded ? (
          <div className="loadScreen">
            <div></div>
          </div>
        ) : bids.length > 0 ? (
          bids.map((bid: IBidProps) => (
            <Bid bid={bid} key={bid.id} auction={auction} />
          ))
        ) : (
          <EmptyMessage message="Não há lances" />
        )}
      </menu>
    </Container>
  );
};

export { ListBids };
