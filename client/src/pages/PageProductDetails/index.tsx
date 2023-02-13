import { ModalBackground } from "../../components/ModalBackground";
import { ProductDetails } from "../../components/ProductDetails";
import { ICommentProps, IProductProps } from "../../interfaces";
import { CreateComment } from "../../components/CreateComment";
import { ListComments } from "../../components/ListComments";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ModalPhoto } from "../../components/ModalPhoto";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

const PageProductDetails = () => {
  const { productId } = useParams();

  const token = sessionStorage.getItem("Motors shop: token");

  const [loaded, setLoaded] = useState<boolean>(false);

  const [loadedProduct, setLoadedProduct] = useState<boolean>(false);

  const [openModalPhoto, setOpenModalPhoto] = useState<boolean>(false);

  const [productRequest, setProductnRequest] = useState<IProductProps>({
    user: {
      name: "",
    },
  } as IProductProps);

  const getProduct = () => {
    setLoadedProduct(true);

    api
      .get(`/products/${productId}`)
      .then((res) => setProductnRequest(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoadedProduct(false));
  };

  const [commentsList, setCommentsList] = useState<ICommentProps[]>([]);

  const getComments = () => {
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
  };

  useEffect(() => {
    getProduct();
    getComments();
  }, []);

  const ListCommentsFunc = (comment: ICommentProps) =>
    setCommentsList([comment, ...commentsList]);

  return (
    <HelmetProvider>
      <Helmet title={`${productRequest.title} | Motors Shop`} />
      {loadedProduct && (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      )}
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
