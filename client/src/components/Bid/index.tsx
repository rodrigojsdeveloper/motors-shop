import { IBid, IUserProps } from "../../interfaces";
import { showDate } from "../../utils/dateCreated";
import { PriceProduct } from "../PriceProduct";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";

const Bid = ({ bid, auction }: IBid) => {
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

  return (
    <Container>
      <div>
        <AvatarUser username={bid.user.name} />

        <p>{showDate(bid.created_at)}</p>
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
