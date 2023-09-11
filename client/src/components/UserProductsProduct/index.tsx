import { DescriptionProduct } from "../DescriptionProduct";
import { IUserProductsProduct } from "../../interfaces";
import { ImageProduct } from "../ImageProduct";
import { PriceProduct } from "../PriceProduct";
import { TitleProduct } from "../TitleProduct";
import { YearProduct } from "../YearProduct";
import { AvatarUser } from "../AvatarUser";
import { KmProduct } from "../KmProduct";
import { Container } from "./style";

const UserProductsProduct = ({ product, user }: IUserProductsProduct) => {
  return (
    <Container>
      <div>
        {product.is_published ? (
          <p className="active">Ativo</p>
        ) : (
          <p className="deactive">Inativo</p>
        )}
        <ImageProduct src={product.cover_image} alt={product.model} />
      </div>

      <TitleProduct title={product.model} />
      <DescriptionProduct description={product.description} />

      <AvatarUser username={user.name} />

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

export { UserProductsProduct };
