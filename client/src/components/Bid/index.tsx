import { IBid } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface IBidComponent {
  bid: IBid;
}

const Bid = ({ bid }: IBidComponent) => {
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

      <span>{bid.value}</span>
    </Container>
  );
};

export { Bid };
