import { IAuctionProps } from "../../interfaces";
import { Container } from "./style";

interface IDetails {
  auction: IAuctionProps;
}

const DetailsAuction = ({ auction }: IDetails) => {
  return (
    <Container>
      <h3>{auction?.product?.title}</h3>

      <div>
        <div>
          <p>{auction?.product?.year}</p>
          <p>{auction?.product?.kilometers} KM</p>
        </div>

        <span>{auction?.product?.price}</span>
      </div>
    </Container>
  );
};

export { DetailsAuction };
