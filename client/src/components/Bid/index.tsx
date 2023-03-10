import { AuctionContext } from "../../contexts/AuctionContext";
import { showDate } from "../../utils/dateCreated";
import { PriceProduct } from "../PriceProduct";
import { useContext, useEffect } from "react";
import { AvatarUser } from "../AvatarUser";
import { IBid } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";

const Bid = ({ bid }: IBid) => {
  const { fetchUser, user, auctionRequest } = useContext(AuctionContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <div>
        <AvatarUser username={bid.user.name} />

        <p>{showDate(bid.created_at)}</p>
      </div>

      <PriceProduct price={bid.value} />

      {user.id == auctionRequest.user.id ? (
        <Button
          size="buttonSizeSellBid"
          color="buttonColorGraySellBid"
          type="button"
        >
          Vender
        </Button>
      ) : null}
    </Container>
  );
};

export { Bid };
