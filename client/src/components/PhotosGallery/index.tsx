import { IPhotosGallery } from "../../interfaces";
import { Container } from "./style";

const PhotosGallery = ({ gallery_image }: IPhotosGallery) => {
  return (
    <Container>
      <h3>Fotos</h3>

      <div>
        <div>
          <div>
            <img src={gallery_image} />
          </div>
          <div>
            <img src={gallery_image} />
          </div>
          <div>
            <img src={gallery_image} />
          </div>
        </div>
        <div>
          <div>
            <img src={gallery_image} />
          </div>
          <div>
            <img src={gallery_image} />
          </div>
          <div>
            <img src={gallery_image} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { PhotosGallery };
