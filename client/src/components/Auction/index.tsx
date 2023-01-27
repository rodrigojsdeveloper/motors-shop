import { useNavigate, useParams } from "react-router-dom";
import rightArrow from "../../assets/Group 29.svg";
import { IAuctionProps } from "../../interfaces";
import clock from "../../assets/Group 13.svg";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface IAuction {
  auction: IAuctionProps;
}

const Auction = ({ auction }: IAuction) => {
  let { auctionId } = useParams();

  auctionId = auction?.id;

  const navigate = useNavigate();

  return (
    <Container>
      <div className="divCardDescription">
        <img src={auction.product?.cover_image} alt={auction.product?.title} />

        <div className="divDescription">
          <div className="divTimeAuction">
            <img src={clock} alt="clock" />
            <time>{auction?.time_limit}</time>
          </div>

          <div>
            <h4>{auction.product?.title}</h4>

            <p>{auction.product?.description}</p>
            <AvatarUser username={auction.user.name} />

            <div className="divYearKMPrice">
              <div>
                <p>{auction.product?.year}</p>
                <p>{auction.product?.kilometers} KM</p>
              </div>

              <span>{auction.product?.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="divRedirectsToAuction"
        onClick={() => navigate(`/auctions/${auctionId}`)}
      >
        <p>Acessar página do leilão</p>

        <img src={rightArrow} alt="right arrow" />
      </div>
    </Container>
  );
};

export { Auction };
