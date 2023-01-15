import { IAuctionProps, IProductProps } from "../../interfaces";
import { Container } from "./style";

interface IDetails {
  product?: IProductProps;
  auction?: IAuctionProps;
}

const Details = ({ product, auction }: IDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const link = `https://api.whatsapp.com/send?phone=${auction?.user.cellphone}&text=Olá%2C%20%20estou%20interessado%20em%20seu%20veículo%2C%20estou%20entrando%20em%20contato%20para%20negociar%20valores`;

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

      {token && <a href={link}>Comprar</a>}
    </Container>
  );
};

export { Details };
