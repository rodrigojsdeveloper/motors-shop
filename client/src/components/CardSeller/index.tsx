import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";

interface ICardSeller {
  user: IUserProps;
}

const CardSeller = ({ user }: ICardSeller) => {
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
        >
          Ver todos anuncios
        </Button>
      </div>
    </Container>
  );
};

export { CardSeller };
