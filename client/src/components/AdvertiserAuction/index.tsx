import { ModalDeleteProduct } from "../ModalDeleteProduct";
import { ModalEditAuction } from "../ModalEditAuction";
import { ModalBackground } from "../ModalBackground";
import { IAuctionProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import clock from "../../assets/Group 13.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";

interface IAuction {
  auction: IAuctionProps;
}

const AdvertiserAuction = ({ auction }: IAuction) => {
  const navigate = useNavigate();

  const [openModalEditProduct, setOpenModalEditProduct] =
    useState<boolean>(false);

  const [auctionRequest, setAuctionRequest] = useState<IAuctionProps>(
    {} as IAuctionProps
  );

  const [closeModalDeleteProduct, setCloseModalDeleteProduct] =
    useState<boolean>(false);

  useEffect(() => {
    api
      .get(`/auctions/${auction?.id}`)
      .then((res) => setAuctionRequest(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {openModalEditProduct && (
        <ModalBackground>
          <ModalEditAuction
            auction={auctionRequest}
            setOpenModalEditProduct={setOpenModalEditProduct}
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
          />
        </ModalBackground>
      )}
      {closeModalDeleteProduct && (
        <ModalBackground>
          <ModalDeleteProduct
            product={auctionRequest}
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
            link="auctions"
          />
        </ModalBackground>
      )}
      <Container>
        <div className="divCardDescription">
          <img
            src={auction?.product?.cover_image}
            alt={auction?.product?.title}
          />

          <div className="divDescription">
            <div className="divTimeAuction">
              <img src={clock} />
              <time>{auction.time_limit}</time>
            </div>

            <div>
              <h4>{auction?.product?.title}</h4>

              <p>{auction?.product?.description}</p>

              <div className="divYearKMPrice">
                <div>
                  <p>{auction?.product?.year}</p>
                  <p>{auction?.product?.kilometers} KM</p>
                </div>

                <span>{auction?.product?.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divRedirectsToAuction">
          <Button
            color="buttonColorBlueBanner"
            size="buttonSizeEditProduct"
            type="button"
            onClick={() => setOpenModalEditProduct(true)}
          >
            Editar
          </Button>
          <Button
            color="buttonColorBlueBanner"
            size="buttonSizeShowProduct"
            type="button"
            onClick={() => navigate(`/auctions/${auction.id}`)}
          >
            Ver como
          </Button>
        </div>
      </Container>
    </>
  );
};

export { AdvertiserAuction };
