import { IProductProps } from "../../interfaces";
import { PriceProduct } from "../PriceProduct";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { Container } from "./style";

interface IDetails {
  product: IProductProps;
}

const DetailsProduct = ({ product }: IDetails) => {
  const link = `https://api.whatsapp.com/send?phone=${product.user.cellphone}&text=Olá%2C%20%20estou%20interessado%20em%20seu%20veículo%2C%20estou%20entrando%20em%20contato%20para%20negociar%20valores`;

  return (
    <Container>
      <h3>{product?.title}</h3>

      <div>
        <div>
          <KmProduct km={product?.kilometers} />
          <YearProduct year={product?.year} />
        </div>

        <PriceProduct price={String(product?.price)} />
      </div>

      <a href={link}>Comprar</a>
    </Container>
  );
};

export { DetailsProduct };
