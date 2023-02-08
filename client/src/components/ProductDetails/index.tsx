import { IProductDetails, IUserProps } from "../../interfaces";
import { DetailsNotLogged } from "../DetailsNotLogged";
import { DetailsProduct } from "../DetailsProduct";
import { PhotosGallery } from "../PhotosGallery";
import { Description } from "../Description";
import { Container, Content } from "./style";
import { useEffect, useState } from "react";
import { CardSeller } from "../CardSeller";
import { api } from "../../services/api";
import { Photo } from "../Photo";

const ProductDetails = ({ product, setOpenModalPhoto }: IProductDetails) => {
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
    }, []);

  return token ? (
    user.id == product.user.id ? (
      <Content>
        <article>
          <div className={"divCarPhotoAndDetails"}>
            <Photo
              image={product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsNotLogged product={product} />
          </div>

          <Description description={product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery gallery_image={product?.gallery_image} />
          <CardSeller user={product.user} />
        </div>
      </Content>
    ) : (
      <Container>
        <article>
          <div className={"divCarPhotoAndDetails"}>
            <Photo
              image={product?.cover_image}
              setOpenModalPhoto={setOpenModalPhoto}
            />

            <DetailsProduct product={product} />
          </div>

          <Description description={product?.description} />
        </article>

        <div className="divPhotosAndUserDetails">
          <PhotosGallery gallery_image={product?.gallery_image} />
          <CardSeller user={product.user} />
        </div>
      </Container>
    )
  ) : (
    <Content>
      <article>
        <div className={"divCarPhotoAndDetails"}>
          <Photo
            image={product?.cover_image}
            setOpenModalPhoto={setOpenModalPhoto}
          />

          <DetailsNotLogged product={product} />
        </div>

        <Description description={product?.description} />
      </article>

      <div className="divPhotosAndUserDetails">
        <PhotosGallery gallery_image={product?.gallery_image} />
        <CardSeller user={product.user} />
      </div>
    </Content>
  );
};

export { ProductDetails };
