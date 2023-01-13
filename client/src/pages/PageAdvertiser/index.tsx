import { AdvertiserMotorcyclesList } from "../../components/AdvertiserMotorcyclesList";
import { AdvertiserAuctionsList } from "../../components/AdvertiserAuctionsList";
import { AdvertiserCarsList } from "../../components/AdvertiserCarsList";
import { ShowAdvertiser } from "../../components/ShowAdvertiser";
import { IAuctionProps, IProductProps, IUserProps } from "../../interfaces";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { useParams } from "react-router-dom";

const PageAdvertiser = () => {
  const { advertiserId } = useParams()

  console.log(advertiserId)

  const token = sessionStorage.getItem("Motors shop: token")

  const [cars, setCars] = useState<IProductProps[]>([]);

  const [motorcycles, setMotorcycles] = useState<IProductProps[]>([]);

  const [auctions, setAuctions] = useState<IAuctionProps[]>([]);

  const [ user, setUser ] = useState<IUserProps>({
    name: "rodrigo",
    email: "rodrigonohype@gmail.com",
    password: "Johndoe@123",
    cellphone: "99 99999-9999",
    cpf: "99999999999",
    birthdate: "99/99/9999",
    is_seller: true,
    description: "description",
    country: "United State",
    state: "Califórnia",
    city: "Mountain View",
    district: "Amphitheatre Pkwy",
    street: "Amphitheatre Pkwy",
    number: 1600,
    complement: "Googleplex",
    zip_code: "9098",
    id: "1"
  } as IUserProps)

  token && useState(() => {

    api.get("/users/profile", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data)
      
      setCars(
        res.data.products.filter(
          (product: IProductProps) => product.vehicle_type == "car"
        )
      );

      setMotorcycles(
        res.data.products.filter(
          (product: IProductProps) => product.vehicle_type == "motorbike"
        )
      );
    })
    .catch(error => console.error(error))
  })

  /*
  token && useEffect(() => {
    api
      .get(`/users/products/${ advertiserId }`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        
      })
      .catch((error) => console.error(error));
  }, []);
  */

  return (
    <Container>
      <Header />

      <div className="divBlue"></div>
      <div className="divWhite">
        <div>
          <ShowAdvertiser user={ user } />
          <AdvertiserAuctionsList auctions={auctions} />
          <AdvertiserCarsList products={cars} />
          <AdvertiserMotorcyclesList products={motorcycles} />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export { PageAdvertiser };
