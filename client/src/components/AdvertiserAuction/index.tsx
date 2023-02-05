import { ModalDeleteProduct } from "../ModalDeleteProduct";
import { DescriptionAuction } from "../DescriptionAuction";
import { ModalBackground } from "../ModalBackground";
import { useNavigate } from "react-router-dom";
import { TitleAuction } from "../TitleAuction";
import { PriceAuction } from "../PriceAuction";
import clock from "../../assets/Group 13.svg";
import { YearProduct } from "../YearProduct";
import { IAuction } from "../../interfaces";
import { KmProduct } from "../KmProduct";
import { ModalEdit } from "../ModalEdit";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const AdvertiserAuction = ({ auction }: IAuction) => {
  const navigate = useNavigate();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  return (
    <>
      {openModalEdit && (
        <ModalBackground>
          <ModalEdit
            product={auction.product}
            setOpenModalEdit={setOpenModalEdit}
            setOpenModalDelete={setOpenModalDelete}
          />
        </ModalBackground>
      )}
      {openModalDelete && (
        <ModalBackground>
          <ModalDeleteProduct
            setOpenModalDelete={setOpenModalDelete}
            productId={auction.id}
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
            onClick={() => setOpenModalEdit(true)}
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
