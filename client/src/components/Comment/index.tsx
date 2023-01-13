import { IComment } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface ICommentComponent {
  comment: IComment;
}

const Comment = ({ comment }: ICommentComponent) => {

  const date = new Date()

  const day = String(date.getDate()).padStart(2, '0');

  const newDate = comment.created_at.split("T")[0].split("-")[2]

  const showDate = (): number => Number(day) - Number(newDate)

  return (
    <Container>
      <div>
        <div>
          <AvatarUser userName={ comment.user.name } />
          <h5>{ comment.user.name }</h5>
        </div>

        <hr />

        <p>há { showDate() } { [0, 1].includes(showDate()) ? "dia" : "dias" }</p>
      </div>

      <p>{comment.content}</p>
    </Container>
  );
};

export { Comment };
