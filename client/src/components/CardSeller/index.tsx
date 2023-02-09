import { useParams } from "react-router-dom";
import { AvatarUser } from "../AvatarUser";
import { IUser } from "../../interfaces";
import { Link } from "react-router-dom";
import { Container } from "./style";

const CardSeller = ({ user }: IUser) => {
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
