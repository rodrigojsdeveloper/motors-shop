import { useNavigate, useParams } from "react-router-dom";
import { IProductProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";

interface IProduct {
  product: IProductProps;
}

const AdvertiserProduct = ({ product }: any) => {
  let { productId } = useParams();

  productId = product.title;

  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/products/${productId}`)}>
      <img
        src={product.cover_image}
        alt={product.title}
        title={product.title}
      />

      <h4>{product.title}</h4>

      <p>{product.description}</p>

      <div>
        <AvatarUser userName={product.user.name} />
        <h6>{product.user.name}</h6>
      </div>

      <div className="divKmYearPrice">
        <div>
          <p>{product.year}</p>
          <p>{product.kilometers} KM</p>
        </div>

        <span>{product.price}</span>
      </div>

      <div className="divButtons">
        <Button
          color="buttonColorWhiteEditAndShowProduct"
          size="buttonSizeEditProduct"
          type="button"
        >
          Editar
        </Button>
        <Button
          color="buttonColorWhiteEditAndShowProduct"
          size="buttonSizeShowProduct"
          type="button"
        >
          Ver como
        </Button>
      </div>
    </Container>
  );
};

export { AdvertiserProduct };
