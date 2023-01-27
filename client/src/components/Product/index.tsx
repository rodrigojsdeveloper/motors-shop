import { useNavigate, useParams } from "react-router-dom";
import { IProductProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { DescriptionProduct } from "../DescriptionProduct";
import { ImageProduct } from "../ImageProduct";
import { KmProduct } from "../KmProduct";
import { PriceProduct } from "../PriceProduct";
import { TitleProduct } from "../TitleProduct";
import { YearProduct } from "../YearProduct";
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
      <ImageProduct src={product.cover_image} alt={product.title} />

      <TitleProduct title={product.title} />
      <DescriptionProduct description={product.description} />

      <AvatarUser username={product.user.name} />

      <div className="divKmYearPrice">
        <div>
          <KmProduct km={product.kilometers} />
          <YearProduct year={product.year} />
        </div>

        <PriceProduct price={product.price} />
      </div>
    </Container>
  );
};

export { Product };
