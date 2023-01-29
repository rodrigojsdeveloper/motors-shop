import { IProductProps } from "../../interfaces";
import { PriceProduct } from "../PriceProduct";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { Container } from "./style";

interface IDetailsNotLoggedProduct {
  product: IProductProps;
}

const DetailsNotLogged = ({ product }: IDetailsNotLoggedProduct) => {
  return (
    <Container>
      <div>
        <h3>{product?.title}</h3>

        <div>
          <div>
            <KmProduct km={product?.kilometers} />
            <YearProduct year={product?.year} />
          </div>

          <PriceProduct price={String(product?.price)} />
        </div>
      </div>
    </Container>
  );
};

export { DetailsNotLogged };
