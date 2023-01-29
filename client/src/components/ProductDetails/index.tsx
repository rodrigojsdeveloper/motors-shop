import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsProduct } from "../DetailsProduct";
import { PhotosGallery } from "../PhotosGallery";
import { IProductProps } from "../../interfaces";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Container } from "./style";
import { Photo } from "../Photo";

interface IAuctionDetails {
  product: IProductProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails = ({ product, setOpenModalPhoto }: IAuctionDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  return (
    <Container>
      <article>
        <div
          className={
            token ? "divCarPhotoAndDetails" : "divCarPhotoAndDetailsNotLogged"
          }
        >
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
  );
};

export { ProductDetails };
