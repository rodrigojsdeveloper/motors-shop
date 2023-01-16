import { useNavigate, useParams } from "react-router-dom";
import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";

interface ICardSeller {
  user: IUserProps;
}

const CardSeller = ({ user }: ICardSeller) => {
  const navigate = useNavigate();

  let { userProductId } = useParams();

  userProductId = user.id;

  return (
    <Container>
      <div>
        <AvatarUser userName={user.name} />
        <h4>{user.name}</h4>
        <p>{user.description}</p>

        <Button
          size="buttonSizeProductDetails"
          color="buttonColorBlackProductDetails"
          type="button"
          onClick={() => navigate(`/users/${userProductId}`)}
        >
          Ver todos anuncios
        </Button>
      </div>
    </Container>
  );
};

export { CardSeller };
