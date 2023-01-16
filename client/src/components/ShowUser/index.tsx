import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface IShowAdvertiser {
  user: IUserProps;
}

const ShowUser = ({ user }: IShowAdvertiser) => {
  return (
    <Container>
      <AvatarUser userName={user?.name} />

      <div>
        <h3>{user?.name}</h3>
        <p>{user?.is_seller ? "Anunciante" : "Comprador"}</p>
      </div>

      <p>{user?.description}</p>
    </Container>
  );
};

export { ShowUser };
