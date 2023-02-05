import { showDate } from "../../utils/dateCreated";
import { IComment } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

const Comment = ({ comment }: IComment) => {
  return (
    <Container>
      <div>
        <AvatarUser username={comment.user.name} />

        <p>{showDate(comment.created_at)}</p>
      </div>

      <p>{comment.content}</p>
    </Container>
  );
};

export { Comment };
