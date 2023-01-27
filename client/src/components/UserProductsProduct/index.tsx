import { DescriptionProduct } from "../DescriptionProduct";
import { ImageProduct } from "../ImageProduct";
import { PriceProduct } from "../PriceProduct";
import { TitleProduct } from "../TitleProduct";
import { YearProduct } from "../YearProduct";
import { IProduct } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { KmProduct } from "../KmProduct";
import { Container } from "./style";

const UserProductsProduct = ({ product }: IProduct) => {
  return (
    <Container>
      <div>
        {product.is_published ? (
          <p className="active">Ativo</p>
        ) : (
          <p className="deactive">Inativo</p>
        )}
        <ImageProduct src={product.cover_image} alt={product.title} />
      </div>

      <TitleProduct title={product.title} />
      <DescriptionProduct description={product.description} />

      <AvatarUser username={product.user?.name ? product.user?.name : ""} />

      <div className="divKmYearPrice">
        <div>
          <YearProduct year={product.year} />
          <KmProduct km={product.kilometers} />
        </div>

        <PriceProduct price={product.price} />
      </div>
    </Container>
  );
};

export { UserProductsProduct };
