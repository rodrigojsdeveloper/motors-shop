import { ModalBackground } from "../../components/ModalBackground";
import { ProductDetails } from "../../components/ProductDetails";
import { CreateComment } from "../../components/CreateComment";
import { ListComments } from "../../components/ListComments";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { IComment, IProductProps } from "../../interfaces";
import { ModalPhoto } from "../../components/ModalPhoto";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const PageProductDetails = () => {
  const { productId } = useParams();

  const token = sessionStorage.getItem("Motors shop: token");

  const [loaded, setLoaded] = useState<boolean>(false);

  const [openModalPhoto, setOpenModalPhoto] = useState<boolean>(false);

  const [productRequest, setProductnRequest] = useState<IProductProps>({
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
      zip_code: "9098",
    },
  } as IProductProps);

  useEffect(() => {
    api
      .get(`/products/${productId}`)
      .then((res) => setProductnRequest(res.data))
      .catch((error) => console.error(error));
  }, []);

  const [commentsList, setCommentsList] = useState<IComment[]>([]);

  useEffect(() => {
    setLoaded(true);

    api
      .get(`/comments/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCommentsList(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoaded(false));
  }, []);

  const ListCommentsFunc = (comment: IComment) =>
    setCommentsList([comment, ...commentsList]);

  return (
    <HelmetProvider>
      <Helmet title={`${productRequest.title} | Motors shop`} />
      {openModalPhoto && (
        <ModalBackground>
          <ModalPhoto
            setOpenModalPhoto={setOpenModalPhoto}
            cover_image={productRequest.cover_image}
            title={productRequest.title}
          />
        </ModalBackground>
      )}
      <Container>
        <Header />

        <div>
          <div className="divBlue"></div>
          <div className="divWhite">
            <div>
              <ProductDetails
                product={productRequest}
                setOpenModalPhoto={setOpenModalPhoto}
              />
              <ListComments loaded={loaded} comments={commentsList} />
              <CreateComment
                ListCommentsFunc={ListCommentsFunc}
                product={productRequest}
              />
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageProductDetails };
