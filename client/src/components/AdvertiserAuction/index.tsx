import { Container } from "./style";
import clock from "../../assets/Group 13.svg";
import { IAuctionProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Button } from "../Button";

interface IAuction {
  auction: IAuctionProps;
}

const AdvertiserAuction = ({ auction }: any) => {

  return (
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
        <Button color="buttonColorBlueBanner" size="buttonSizeEditProduct" type="button">Editar</Button>
        <Button color="buttonColorBlueBanner" size="buttonSizeShowProduct" type="button">Ver como</Button>
      </div>
    </Container>
  );
};

export { AdvertiserAuction };
