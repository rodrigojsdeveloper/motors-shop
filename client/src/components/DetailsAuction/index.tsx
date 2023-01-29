import { IAuctionProps } from "../../interfaces";
import { PriceProduct } from "../PriceProduct";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { Container } from "./style";

interface IDetails {
  auction: IAuctionProps;
}

const DetailsAuction = ({ auction }: IDetails) => {
  const link = `https://api.whatsapp.com/send?phone=${auction.user.cellphone}&text=Olá%2C%20%20estou%20interessado%20em%20seu%20veículo%2C%20estou%20entrando%20em%20contato%20para%20negociar%20valores`;

  return (
    <Container>
      <h3>{auction.product?.title}</h3>

      <div>
        <div>
          <KmProduct km={auction.product?.kilometers} />
          <YearProduct year={auction.product?.year} />
        </div>

        <PriceProduct price={String(auction.product?.price)} />
      </div>

      <a href={link}>Comprar</a>
    </Container>
  );
};

export { DetailsAuction };
