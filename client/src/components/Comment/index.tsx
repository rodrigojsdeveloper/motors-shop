import { IComment } from "../../interfaces";
import { Container } from "./style";

interface ICommentComponent {
  comment: IComment;
}

const Comment = ({ comment }: ICommentComponent) => {
  return (
    <Container>
      <div>
        <div>
          <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
          <h5>{ comment.user.name }</h5>
        </div>

        <hr />

        <p>há 3 dias</p>
      </div>

      <p>{comment.content}</p>
    </Container>
  );
};

export { Comment };
