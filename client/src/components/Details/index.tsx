import { IProductProps } from "../../interfaces";
import { Container } from "./style";

interface IDetails {
  product: IProductProps;
}

const Details = ({ product }: IDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const link = `https://api.whatsapp.com/send?phone=${product.user.cellphone}&text=Olá%2C%20%20estou%20interessado%20em%20seu%20veículo%2C%20estou%20entrando%20em%20contato%20para%20negociar%20valores`;

  return (
    <Container>
      <h3>{product?.title}</h3>

      <div>
        <div>
          <p>{product?.year}</p>
          <p>{product?.kilometers} KM</p>
        </div>

        <span>{product?.price}</span>
      </div>

      {token && <a href={link}>Comprar</a>}
    </Container>
  );
};

export { Details };
