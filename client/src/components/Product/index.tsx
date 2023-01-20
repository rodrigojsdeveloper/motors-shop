import { useNavigate, useParams } from "react-router-dom";
import { IProductProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface IProduct {
  product: IProductProps;
}

const Product = ({ product }: IProduct) => {
  let { productId } = useParams();

  productId = product.id;

  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/products/${productId}`)}>
      <img
        src={product.cover_image}
        alt={product.title}
        title={product.title}
      />

      <div>
        <h4>{product.title}</h4>

        <p>{product.description}</p>

        <div>
          <AvatarUser userName={product.user.name} />
          <h6>{product.user.name}</h6>
        </div>

        <div className="divKmYearPrice">
          <div>
            <p>{product.kilometers} KM</p>
            <p>{product.year}</p>
          </div>

          <span>{product.price}</span>
        </div>
      </div>
    </Container>
  );
};

export { Product };
