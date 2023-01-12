import { IComment } from "../../interfaces";
import { Comment } from "../Comment";
import { Container } from "./style";

interface IListComments {
  comments: any;
}

const ListComments = ({ comments }: IListComments) => {
  return (
    <Container>
      <h3>Comentários</h3>

      <menu>
        {comments.map((comment: IComment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </menu>
    </Container>
  );
};

export { ListComments };
