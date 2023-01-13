import { ProductDetails } from "../../components/ProductDetails";
import { CreateComment } from "../../components/CreateComment";
import { ListComments } from "../../components/ListComments";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAuctionProps, IComment, IProductProps } from "../../interfaces";
import { api } from "../../services/api";

const PageProductDetails = () => {

  const { productId } = useParams()

  const token = sessionStorage.getItem("Motors shop: token");

  const [ productRequest, setProductnRequest ] = useState<IProductProps>({
    title: "Hyundai SUV",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    year: 2017,
    kilometers: 1000,
    price: "R$ 120.000,00",
    ad_type: "sale",
    vehicle_type: "car",
    cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05KgqO1GWbZVemiSSoyOG0q-sZ4LqWPmgi5DcI9Tkagf5AELXICyqG_6_u9wgynoztl0&usqp=CAU",
    gallery_image: "https://image.similarpng.com/very-thumbnail/2020/05/White-premium-car-crossover-SUV-transparent-PNG.png",
    id: "21",
    is_published: true,
    comments: [],
    user: {
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
      zip_code: "9098"
    }
  } as IProductProps)
  
  useEffect(() => {
    api.get(`/products/${ productId }`)
    .then(res => setProductnRequest(res.data))
    .catch(error => console.error(error))
  }, [])

  const [ commentsList, setCommentsList ] = useState<IComment[]>([])

  useEffect(() => {
    api.get(`/products/${ productId }`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then(res => console.log(res.data))
    .catch(error => console.error(error))
  }, [])

  console.log(commentsList)

  const ListCommentsFunc = (comment: IComment) => setCommentsList([ comment, ...commentsList ])

  return (
    <Container>
      <Header />

      <div>
        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <ProductDetails product={ productRequest } />
            <ListComments comments={ commentsList } />
            <CreateComment ListCommentsFunc={ ListCommentsFunc } product={ productRequest } />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export { PageProductDetails };
