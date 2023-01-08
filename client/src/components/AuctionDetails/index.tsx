import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Details } from "../Details";
import { Container } from "./style";
import { Photo } from "../Photo";
import { IAuctionProps } from "../../interfaces";

interface IAuctionDetails {
  auction: IAuctionProps
}

const AuctionDetails = ({ auction }: IAuctionDetails) => {
  return (
    <Container>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo image={ auction.cover_image } />

          <Details product={ auction } />
        </div>

        <Description description={ auction.description } />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={ auction.gallery_image } />
        <CardSeller user={ auction.user } />
      </div>
    </Container>
  );
};

export { AuctionDetails };
