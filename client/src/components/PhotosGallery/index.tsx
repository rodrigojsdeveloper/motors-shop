import { IPhotosGallery } from "../../interfaces";
import { Container } from "./style";

const PhotosGallery = ({
  primary_image,
  second_image,
  model,
}: IPhotosGallery) => {
  return (
    <Container>
      <h3>Fotos</h3>

      <div>
        <div>
          <div>
            <img src={primary_image} alt={model} />
          </div>
          <div>
            <img src={primary_image} alt={model} />
          </div>
          <div>
            <img src={primary_image} alt={model} />
          </div>
        </div>
        <div>
          <div>
            <img src={second_image} alt={model} />
          </div>
          <div>
            <img src={second_image} alt={model} />
          </div>
          <div>
            <img src={second_image} alt={model} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { PhotosGallery };
