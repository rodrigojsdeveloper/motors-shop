import { IAvatarUser } from "../../interfaces";
import { Container, Content } from "./style";

const AvatarUser = ({ username }: IAvatarUser) => {
  if (typeof username !== "string") {
    username = "";
  }

  return (
    <Container>
      <Content>
        {username.split(" ").length == 1 ? (
          <p>{username[0]}</p>
        ) : (
          <>
            <p>{username[0]}</p>
            <p>{username.split(" ")[1][0]}</p>
          </>
        )}
      </Content>

      <h5>{username}</h5>
    </Container>
  );
};

export { AvatarUser };
