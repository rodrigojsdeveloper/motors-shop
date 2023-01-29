import { IUserProps } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { DescriptionProduct } from "../DescriptionProduct";
import { Container } from "./style";

interface IShowAdvertiser {
  user: IUserProps;
}

const ShowUser = ({ user }: IShowAdvertiser) => {
  return (
    <Container>
      <AvatarUser username={user?.name} />

      <div>
        <h3>{user?.name}</h3>
        <p>Anunciante</p>
      </div>

      <DescriptionProduct description={user?.description} />
    </Container>
  );
};

export { ShowUser };
