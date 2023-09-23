import { DescriptionProduct } from "../DescriptionProduct";
import { AvatarUser } from "../AvatarUser";
import { IUser } from "../../interfaces";
import { Container } from "./style";

const ShowUser = ({ user }: IUser) => {
  return (
    <Container>
      <AvatarUser username={user?.name}  color={user?.color} />

      <div>
        <h3>{user?.name}</h3>
        <p>Anunciante</p>
      </div>

      <DescriptionProduct description={user?.description} />
    </Container>
  );
};

export { ShowUser };
