import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Details } from "../Details";
import { Container } from "./style";
import { Photo } from "../Photo";
import { IAuctionProps } from "../../interfaces";

interface IAuctionDetails {
  auction: IAuctionProps
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>
}

const AuctionDetails = ({ auction, setOpenModalPhoto }: IAuctionDetails) => {
  return (
    <Container>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo image={ auction.product?.cover_image } setOpenModalPhoto={ setOpenModalPhoto } />

          <Details auction={ auction } />
        </div>

        <Description description={ auction.product?.description } />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={ auction.product?.gallery_image } />
        <CardSeller user={ auction.user } />
      </div>
    </Container>
  );
};

export { AuctionDetails };
