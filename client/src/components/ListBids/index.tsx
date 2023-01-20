import { IBid } from "../../interfaces";
import { Container } from "./style";
import { Bid } from "../Bid";
import { EmptyMessage } from "../EmptyMessage";

interface IListBids {
  bids: IBid[];
  loaded: boolean;
}

const ListBids = ({ bids, loaded }: IListBids) => {
  return (
    <Container>
      <h3>Lances</h3>

      <menu>
        {loaded ? (
          <div className="loadScreen">
            <div></div>
          </div>
        ) : bids.length > 0 ? (
          bids.map((bid) => <Bid bid={bid} key={bid.id} />)
        ) : (
          <EmptyMessage message="Não há lances" />
        )}
      </menu>
    </Container>
  );
};

export { ListBids };
