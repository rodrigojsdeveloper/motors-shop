import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { CardSeller } from "../CardSeller";
import { Details } from "../Details";
import { Container } from "./style";
import { Photo } from "../Photo";

const AuctionDetails = () => {
  return (
    <Container>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo />

          <Details />
        </div>

        <Description />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery />
        <CardSeller />
      </div>
    </Container>
  );
};

export { AuctionDetails };
