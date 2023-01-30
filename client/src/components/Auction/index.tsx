import { useNavigate, useParams } from "react-router-dom";
import rightArrow from "../../assets/Group 29.svg";
import { IAuctionProps } from "../../interfaces";
import clock from "../../assets/Group 13.svg";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { TitleAuction } from "../TitleAuction";
import { YearProduct } from "../YearProduct";
import { KmProduct } from "../KmProduct";
import { PriceAuction } from "../PriceAuction";
import { DescriptionAuction } from "../DescriptionAuction";

interface IAuction {
  auction: IAuctionProps;
}

const Auction = ({ auction }: IAuction) => {
  let { auctionId } = useParams();

  auctionId = auction.id;

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
            <TitleAuction title={auction.product?.title} />

            <DescriptionAuction description={auction.product?.description} />
            <AvatarUser username={auction.user.name} />

            <div className="divYearKmAndPrice">
              <div>
                <KmProduct km={auction.product?.kilometers} />
                <YearProduct year={auction.product?.year} />
              </div>

              <PriceAuction price={auction.product?.price} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="divRedirectsToAuction"
        onClick={() => {
          navigate(`/auctions/${auctionId}`);
          window.scroll({ top: 0 });
        }}
      >
        <p>Acessar página do leilão</p>

        <img src={rightArrow} alt="right arrow" />
      </div>
    </Container>
  );
};

export { Auction };
