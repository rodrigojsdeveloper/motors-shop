import { IBid, IUserProps } from "../../interfaces";
import { useEffect, useState } from "react";
import { AvatarUser } from "../AvatarUser";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";

interface IBidComponent {
  bid: IBid;
}

const Bid = ({ bid }: IBidComponent) => {
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

  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");

  const newDate = bid.created_at.split("T")[0].split("-")[2];

  const showDate = (): number => Number(day) - Number(newDate) + 1;

  return (
    <Container>
      <div>
        <div>
          <AvatarUser userName={bid.user.name} />
          <h3>{bid.user.name}</h3>
        </div>

        <hr />

        <p>
          há {showDate()} {[0, 1].includes(showDate()) ? "dia" : "dias"}
        </p>
      </div>

      <span>
        R${" "}
        {bid.value.split(" ").length > 1
          ? bid.value.split(" ")[1]
          : bid.value.split(" ")[0]}
      </span>

      {user.id == bid.user.id ? (
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
