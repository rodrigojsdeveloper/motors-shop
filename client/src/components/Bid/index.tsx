import { IAuctionProps, IBid, IUserProps } from "../../interfaces";
import { PriceProduct } from "../PriceProduct";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";

interface IBidComponent {
  bid: IBid;
  auction: IAuctionProps;
}

const Bid = ({ bid, auction }: IBidComponent) => {
  const token = sessionStorage.getItem("Motors shop: token");

  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  useEffect(() => {
    api
      .get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error));
  }, []);

  const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

  const showDate = () => {
    const currentDate = new Date();
    const diffInTime = +currentDate - +new Date(bid.created_at);
    const diffInDays = diffInTime / ONE_DAY_IN_MS;
    const postedAt = Math.floor(diffInDays);

    if (diffInDays >= 365) {
      const years = Math.floor(diffInDays / 365);

      return `há ${years} ${years > 1 ? "anos" : "ano"}`;
    } else if (diffInDays >= 30) {
      const months = Math.floor(diffInDays / 30);

      return `há ${months} ${months > 1 ? "meses" : "mês"}`;
    } else if (postedAt > 1) {
      return `há ${postedAt} dias`;
    } else if (postedAt === 0) {
      return "Postado hoje";
    }

    return `há ${postedAt} dia`;
  };

  return (
    <Container>
      <div>
        <AvatarUser username={bid.user.name} />

        <p>{showDate()}</p>
      </div>

      <PriceProduct price={bid.value} />

      {user.id == auction.user.id ? (
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
