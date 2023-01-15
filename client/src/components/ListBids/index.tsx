import { IBid } from "../../interfaces";
import { Container } from "./style";
import { Bid } from "../Bid";

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
          <section>
            <p>Não há comentários</p>
          </section>
        )}
      </menu>
    </Container>
  );
};

export { ListBids };
