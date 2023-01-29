import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsAuction } from "../DetailsAuction";
import { PhotosGallery } from "../PhotosGallery";
import { IAuctionProps } from "../../interfaces";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Container, Content } from "./style";
import { Photo } from "../Photo";

interface IAuctionDetails {
  auction: IAuctionProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuctionDetails = ({ auction, setOpenModalPhoto }: IAuctionDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  return token ? (
    <Container>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo
            image={auction.product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          {token ? (
            <DetailsAuction auction={auction} />
          ) : (
            <DetailsNotLogged product={auction.product} />
          )}
        </div>

        <Description description={auction.product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={auction.product?.gallery_image} />
        <CardSeller user={auction.user} />
      </div>
    </Container>
  ) : (
    <Content>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo
            image={auction.product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          {token ? (
            <DetailsAuction auction={auction} />
          ) : (
            <DetailsNotLogged product={auction.product} />
          )}
        </div>

        <Description description={auction.product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={auction.product?.gallery_image} />
        <CardSeller user={auction.user} />
      </div>
    </Content>
  );
};

export { AuctionDetails };
