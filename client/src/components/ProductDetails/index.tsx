import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsProduct } from "../DetailsProduct";
import { PhotosGallery } from "../PhotosGallery";
import { IProductProps } from "../../interfaces";
import { Description } from "../Description";
import { Container, Content } from "./style";
import { CardSeller } from "../CardSeller";
import { Photo } from "../Photo";

interface IAuctionDetails {
  product: IProductProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails = ({ product, setOpenModalPhoto }: IAuctionDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  return (
    token ? (
      <Container>
      <article>
        <div className={"divCarPhotoAndDetails"}>
          <Photo
            image={product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          {token ? (
            <DetailsProduct product={product} />
          ) : (
            <DetailsNotLogged product={product} />
          )}
        </div>

        <Description description={product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={product?.gallery_image} />
        <CardSeller user={product.user} />
      </div>
    </Container>
    ) : (
      <Content>
      <article>
        <div className={"divCarPhotoAndDetails"}>
          <Photo
            image={product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          {token ? (
            <DetailsProduct product={product} />
          ) : (
            <DetailsNotLogged product={product} />
          )}
        </div>

        <Description description={product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={product?.gallery_image} />
        <CardSeller user={product.user} />
      </div>
    </Content>
    )
  );
};

export { ProductDetails };
