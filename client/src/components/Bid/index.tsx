import { IBid } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"
import { Container } from "./style"

interface IBidComponent {
    bid: IBid
}

const Bid = ({ bid }: IBidComponent) => {

    return (
        <Container>
            <div>
                <div>
                    <AvatarUser userName={ bid.user.name } />
                    <h3>{ bid.user.name }</h3>
                </div>

                <hr />
                
                <p>há { bid.created_at.split("N")[0] } dias</p>
            </div>
            
            <span>{ bid.value }</span>
        </Container>
    )
}

export { Bid }
