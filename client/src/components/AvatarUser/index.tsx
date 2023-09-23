import { IAvatarUser } from "../../interfaces";
import { Container, Content } from "./style";

const AvatarUser = ({ username, color }: IAvatarUser) => {
  if (typeof username !== "string") {
    username = "";
  }

  return (
    <Container>
      <Content style={{ backgroundColor: color }}>
        {username.split(" ").length == 1 ? (
          <p>{username[0]}</p>
        ) : (
          <>
            <p>{username[0]}</p>
            <p>{username.split(" ")[1][0]}</p>
          </>
        )}
      </Content>

      <h4 className="username">{username}</h4>
    </Container>
  );
};

export { AvatarUser };
