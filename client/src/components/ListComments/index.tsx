import { Comment } from "../Comment"
import { Container } from "./style"

const ListComments = () => {

    return (
        <Container>
            <h3>Comentários</h3>

            <menu>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </menu>
        </Container>
    )
}

export { ListComments }
