import { IComment } from "../../interfaces";
import { AvatarUser } from "../AvatarUser";
import { Container } from "./style";

interface ICommentComponent {
  comment: IComment;
}

const Comment = ({ comment }: ICommentComponent) => {
  const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

  const showDate = () => {
    const currentDate = new Date();
    const diffInTime = +currentDate - +new Date(comment.created_at);
    const diffInDays = diffInTime / ONE_DAY_IN_MS;
    const postedAt = Math.floor(diffInDays);

    if (diffInDays >= 365) {
      const years = Math.floor(diffInDays / 365);

      return `há ${years} ${years > 1 ? "anos" : "ano"}`;
    } else if (diffInDays >= 30) {
      const months = Math.floor(diffInDays / 30);

      return `há ${months} ${months > 1 ? "meses" : "mês"}`;
    } else if (postedAt > 1) {
      return `há ${postedAt} dias`;
    } else if (postedAt === 0) {
      return "Postado hoje";
    }

    return `há ${postedAt} dia`;
  };

  return (
    <Container>
      <div>
        <AvatarUser username={comment.user.name} />

        <p>{showDate()}</p>
      </div>

      <p>{comment.content}</p>
    </Container>
  );
};

export { Comment };
