import { IProductProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface IProduct {
  product: IProductProps;
}

const UserProductsProduct = ({ product }: IProduct) => {
  console.log(product);
  return (
    <Container>
      <div>
        {product.is_published ? (
          <p className="active">Ativo</p>
        ) : (
          <p className="deactive">Inativo</p>
        )}
        <img
          src={product.cover_image}
          alt={product.title}
          title={product.title}
        />
      </div>

      <div>
        <h4>{product.title}</h4>

        <p>{product.description}</p>

        <div>
          <AvatarUser userName={product.user?.name ? product.user?.name : ""} />
          <h6>{product.user?.name}</h6>
        </div>

        <div className="divKmYearPrice">
          <div>
            <p>{product.year}</p>
            <p>{product.kilometers} KM</p>
          </div>

          <span>{product.price}</span>
        </div>
      </div>
    </Container>
  );
};

export { UserProductsProduct };
