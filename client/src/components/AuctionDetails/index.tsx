import { IAuctionDetails, IUserProps } from "../../interfaces";
import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsAuction } from "../DetailsAuction";
import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { Container, Content } from "./style";
import { useEffect, useState } from "react";
import { CardSeller } from "../CardSeller";
import { api } from "../../services/api";
import { Photo } from "../Photo";

const AuctionDetails = ({ auction, setOpenModalPhoto }: IAuctionDetails) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  token &&
    useEffect(() => {
      api
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((error) => console.error(error));
    });

  return token ? (
    user.id == auction.user.id ? (
      <Content>
        <article>
          <div className="divCarPhotoAndDetails">
            <Photo
              image={auction.product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsNotLogged product={auction.product} />
          </div>

          <Description description={auction.product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery gallery_image={auction.product?.gallery_image} />
          <CardSeller user={auction.user} />
        </div>
      </Content>
    ) : (
      <Container>
        <article>
          <div className="divCarPhotoAndDetails">
            <Photo
              image={auction.product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsAuction auction={auction} />
          </div>

          <Description description={auction.product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery gallery_image={auction.product?.gallery_image} />
          <CardSeller user={auction.user} />
        </div>
      </Container>
    )
  ) : (
    <Content>
      <article>
        <div className="divCarPhotoAndDetails">
          <Photo
            image={auction.product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          <DetailsNotLogged product={auction.product} />
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
