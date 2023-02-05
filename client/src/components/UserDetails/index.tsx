import { AvatarUser } from "../AvatarUser";
import { IUser } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";

const UserDetails = ({ user }: IUser) => {
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
