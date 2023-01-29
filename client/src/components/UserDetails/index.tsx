import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";
import { Button } from "../Button";

interface IUserDetails {
  user: IUserProps;
}

const UserDetails = ({ user }: IUserDetails) => {
  return (
    <Container>
      <AvatarUser username={user.name} />

      <div>
        <h2>{user.name}</h2>
        <p>{user.is_seller ? "Anúnciante" : "Comprador"}</p>
      </div>

      <p>{user.description}</p>

      <Button
        size="buttonSizeUserDetailsMedium"
        color="buttonColorWhiteUserDetails"
        type="button"
      >
        Criar anúncio
      </Button>
    </Container>
  );
};

export { UserDetails };
