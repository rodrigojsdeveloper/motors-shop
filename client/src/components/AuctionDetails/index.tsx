import { AuctionContext } from "../../contexts/AuctionContext";
import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsAuction } from "../DetailsAuction";
import { PhotosGallery } from "../PhotosGallery";
import { useContext, useEffect } from "react";
import { Description } from "../Description";
import { Container, Content } from "./style";
import { CardSeller } from "../CardSeller";
import { Photo } from "../Photo";

const AuctionDetails = () => {
  const { fetchUser, user, auctionRequest, setOpenModalPhoto } =
    useContext(AuctionContext);

  const token = sessionStorage.getItem("Motors shop: token");

  token &&
    useEffect(() => {
      fetchUser();
    }, [token]);

  return token ? (
    user.id == auctionRequest.user.id ? (
      <Content>
        <article>
          <div className="divCarPhotoAndDetails">
            <Photo
              image={auctionRequest.product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsNotLogged product={auctionRequest.product} />
          </div>

          <Description description={auctionRequest.product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery
            gallery_image={auctionRequest.product?.gallery_image}
          />
          <CardSeller user={auctionRequest.user} />
        </div>
      </Content>
    ) : (
      <Container>
        <article>
          <div className="divCarPhotoAndDetails">
            <Photo
              image={auctionRequest.product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsAuction auction={auctionRequest} />
          </div>

          <Description description={auctionRequest.product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery
            gallery_image={auctionRequest.product?.gallery_image}
          />
          <CardSeller user={auctionRequest.user} />
        </div>
      </Container>
    )
  ) : (
    <Content>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo
            image={auctionRequest.product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          <DetailsNotLogged product={auctionRequest.product} />
        </div>

        <Description description={auctionRequest.product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={auctionRequest.product?.gallery_image} />
        <CardSeller user={auctionRequest.user} />
      </div>
    </Content>
  );
};

export { AuctionDetails };
