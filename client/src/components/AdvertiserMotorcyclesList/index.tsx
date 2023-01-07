import { AdvertiserProduct } from "../AdvertiserProduct";
import { IListProducts } from "../../interfaces";
import { Container } from "./style";

const AdvertiserMotorcyclesList = ({ listName, products }: IListProducts) => {
  const motorcycle = {
    title: "Zero Motorcycles SR/S",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: 2020,
    kilometers: 400,
    price: "R$ 67.000,00",
    ad_type: "sale",
    vehicle_type: "car",
    cover_image:
      "https://d29sx7s964xey6.cloudfront.net/f37b477e-6de9-4988-bcc8-944ce8105564_SRS_Asphalt.136.4.png?auto=compress,format&w=1650&h=1080&fit=clamp",
    gallery_image:
      "https://d29sx7s964xey6.cloudfront.net/52950879-ee2e-4b32-9cdc-3bc97a096004_SRS_Asphalt.136.1.png?auto=compress,format",
    user: {
      name: "Rodrigo Silva",
    },
  };

  return (
    <Container id="cars">
      <h2>{listName}</h2>

      <menu>
        <AdvertiserProduct product={motorcycle} />
        <AdvertiserProduct product={motorcycle} />
        <AdvertiserProduct product={motorcycle} />
        <AdvertiserProduct product={motorcycle} />
        <AdvertiserProduct product={motorcycle} />
      </menu>
    </Container>
  );
};

export { AdvertiserMotorcyclesList };
