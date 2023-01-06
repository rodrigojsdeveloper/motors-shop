import { Container } from "./style"
import rightArrow from "../../assets/Group 29.svg"
import clock from "../../assets/Group 13.svg"
import { useNavigate, useParams } from "react-router-dom"
import { IAuctionProps } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"

interface IAuction {
    auction: IAuctionProps
}

const Auction = ({ auction }: any) => {

    let { auctionId } = useParams()

    auctionId = auction.id

    const navigate = useNavigate()

    return (
        <Container>
            <div className="divCardDescription">
                <img src={ auction.cover_image } alt={ auction.title } />

                <div className="divDescription">
                    <div className="divTimeAuction">
                        <img src={clock} />
                        <time>{ auction.time_limit }</time>
                    </div>

                    <div>
                        <h4>{ auction.title }</h4>

                        <p>{ auction.description }</p>

                        <div className="divUser">
                            <AvatarUser userName={ auction.user.name } />
                            <h6>{ auction.user.name }</h6>
                        </div>

                        <div className="divYearKMPrice">
                            <div>
                                <p>{ auction.year }</p>
                                <p>{ auction.kilometers } KM</p>
                            </div>

                            <span>{ auction.price }</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divRedirectsToAuction" onClick={ () => navigate(`/auctions/${ auctionId }`) }>
                <p>Acessar página do leilão</p>

                <img src={ rightArrow } alt="right arrow" />
            </div>
        </Container>
    )
}

export { Auction }
