import { ModalBackground } from "../../components/ModalBackground";
import { ProductDetails } from "../../components/ProductDetails";
import { ICommentProps, IProductProps } from "../../interfaces";
import { CreateComment } from "../../components/CreateComment";
import { ListComments } from "../../components/ListComments";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ModalPhoto } from "../../components/ModalPhoto";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loaded } from "../../components/Loaded";
import { useParams } from "react-router-dom";
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

  const [commentsList, setCommentsList] = useState<ICommentProps[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoadedProduct(true);

      try {
        const { data } = await api.get(`/products/${productId}`);
        setProductnRequest(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadedProduct(false);
      }
    };

    const fetchComments = async () => {
      setLoaded(true);

      try {
        const { data } = await api.get(`/comments/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCommentsList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoaded(false);
      }
    };

    fetchProduct();
    fetchComments();
  }, [productId, token]);

  const handleListComments = (comment: ICommentProps) =>
    setCommentsList([comment, ...commentsList]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title={`${productRequest.model} | Motors Shop`} />
      </HelmetProvider>
      {loadedProduct ? (
        <ModalBackground>
          <Loaded />
        </ModalBackground>
      ) : null}
      {openModalPhoto ? (
        <ModalBackground>
          <ModalPhoto
            setOpenModal={setOpenModalPhoto}
            cover_image={productRequest.cover_image}
            title={productRequest.model}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />

        <div>
          <div className="divBlue"></div>
          <div className="divWhite">
            <div>
              <ProductDetails
                product={productRequest}
                setOpenModal={setOpenModalPhoto}
              />
              <ListComments loaded={loaded} comments={commentsList} />
              <CreateComment
                ListCommentsFunc={handleListComments}
                product={productRequest}
              />
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </React.Fragment>
  );
};

export { PageProductDetails };
