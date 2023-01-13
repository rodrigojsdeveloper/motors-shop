import { Container } from "./style";
import clock from "../../assets/Group 13.svg";
import { IAuctionProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModalBackground } from "../ModalBackground";
import { ModalEditProduct } from "../ModalEditProduct";
import { api } from "../../services/api";
import { ModalDeleteProduct } from "../ModalDeleteProduct";

interface IAuction {
  auction: IAuctionProps;
}

const AdvertiserAuction = ({ auction }: any) => {

  let auctionId = useParams()

  auctionId = auction.title

  const [ openModalEditProduct, setOpenModalEditProduct ] = useState<boolean>(false)

  const [ auctionRequest, setAuctionRequest ] = useState<IAuctionProps>({} as IAuctionProps)

  const [ closeModalDeleteProduct, setCloseModalDeleteProduct ] = useState<boolean>(false)

  const navigate = useNavigate()

  return (
    <>
    {
      openModalEditProduct &&
      <ModalBackground>
        <ModalEditProduct product={ auctionRequest } setOpenModalEditProduct={ setOpenModalEditProduct } setCloseModalDeleteProduct={ setCloseModalDeleteProduct } link="auctions" />
      </ModalBackground>
    }
    {
      closeModalDeleteProduct &&
      <ModalBackground>
        <ModalDeleteProduct product={ auctionRequest } setCloseModalDeleteProduct={ setCloseModalDeleteProduct } link="auctions" />
      </ModalBackground>
    }
    <Container>
      <div className="divCardDescription">
        <img src={auction.cover_image} alt={auction.title} />

        <div className="divDescription">
          <div className="divTimeAuction">
            <img src={clock} />
            <time>{auction.time_limit}</time>
          </div>

          <div>
            <h4>{auction.title}</h4>

            <p>{auction.description}</p>

            <div className="divUser">
              <AvatarUser userName={auction.user.name} />
              <h6>{auction.user.name}</h6>
            </div>

            <div className="divYearKMPrice">
              <div>
                <p>{auction.year}</p>
                <p>{auction.kilometers} KM</p>
              </div>

              <span>{auction.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divRedirectsToAuction">
        <Button color="buttonColorBlueBanner" size="buttonSizeEditProduct" type="button" onClick={ () => setOpenModalEditProduct(true) }>Editar</Button>
        <Button color="buttonColorBlueBanner" size="buttonSizeShowProduct" type="button" onClick={ () => navigate(`/auctions/${auctionId}`) }>Ver como</Button>
      </div>
    </Container>
    </>
  );
};

export { AdvertiserAuction };
