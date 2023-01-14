import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Details } from "../Details";
import { Container } from "./style";
import { Photo } from "../Photo";
import { IProductProps } from "../../interfaces";

interface IAuctionDetails {
  product: IProductProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails = ({ product, setOpenModalPhoto }: IAuctionDetails) => {
  return (
    <Container>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo
            image={product.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          <Details product={product} />
        </div>

        <Description description={product.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={product.gallery_image} />
        <CardSeller user={product.user} />
      </div>
    </Container>
  );
};

export { ProductDetails };
