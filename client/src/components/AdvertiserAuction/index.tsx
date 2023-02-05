import { ModalDeleteProduct } from "../ModalDeleteProduct";
import { ModalBackground } from "../ModalBackground";
import { IAuctionProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import clock from "../../assets/Group 13.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { TitleAuction } from "../TitleAuction";
import { DescriptionAuction } from "../DescriptionAuction";
import { KmProduct } from "../KmProduct";
import { YearProduct } from "../YearProduct";
import { PriceAuction } from "../PriceAuction";
import { ModalEdit } from "../ModalEdit";

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
          <ModalEdit
            product={auctionRequest.product}
            setOpenModalEditProduct={setOpenModalEditProduct}
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
          />
        </ModalBackground>
      )}
      {closeModalDeleteProduct && (
        <ModalBackground>
          <ModalDeleteProduct
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
            productId={auction.id}
            url="auctions"
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
              <TitleAuction title={auction?.product?.title} />

              <DescriptionAuction description={auction?.product?.description} />

              <div className="divYearKmAndPrice">
                <div>
                  <KmProduct km={auction?.product?.kilometers} />
                  <YearProduct year={auction?.product?.year} />
                </div>

                <PriceAuction price={auction?.product?.price} />
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
