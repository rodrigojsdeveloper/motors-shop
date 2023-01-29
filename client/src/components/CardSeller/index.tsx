import { useParams } from "react-router-dom";
import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Link } from "react-router-dom";

interface ICardSeller {
  user: IUserProps;
}

const CardSeller = ({ user }: ICardSeller) => {

  let { userProductId } = useParams();

  userProductId = user.id;

  return (
    <Container>
      <div>
        <AvatarUser username={user.name} />
        <h4>{user.name}</h4>
        <p>{user.description}</p>

        <Link to={`/users/${userProductId}`}>Ver todos anuncios</Link>
      </div>
    </Container>
  );
};

export { CardSeller };
