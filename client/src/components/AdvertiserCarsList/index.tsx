import { IListProducts, IProductProps } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";

const AdvertiserCarsList = ({ listName, products }: IListProducts) => {
  const car = {
    title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: 2013,
    kilometers: 0,
    price: "R$ 00.000,00",
    ad_type: "sale",
    vehicle_type: "car",
    cover_image:
      "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU=",
    gallery_image:
      "https://media.istockphoto.com/id/1157655660/pt/foto/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=SwmLFK_KmRw0oQFCDscipI-N2gSj1PItzTkC69BdlpA=",
    user: {
      name: "Rodrigo Silva",
    },
  };

  return (
    <Container id="cars">
      <h2>{listName}</h2>

      <menu>
        <Product product={car} />
        <Product product={car} />
        <Product product={car} />
        <Product product={car} />
        <Product product={car} />
      </menu>
    </Container>
  );
};

export { AdvertiserCarsList };
