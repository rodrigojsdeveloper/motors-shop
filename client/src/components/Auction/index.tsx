import { Container } from "./style"
import rightArrow from "../../assets/Group 29.svg"
import clock from "../../assets/Group 13.svg"
import { useNavigate, useParams } from "react-router-dom"
import { IAuctionProps } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"

interface IAuction {
    auction: IAuctionProps
}

const Auction = ({ auction }: IAuction) => {

    let { auctionId } = useParams()

    auctionId = auction.id

    const navigate = useNavigate()

    function startTimer(duration: any, display: any) {
        var timer: number
        var minutes 
        var seconds;
        setInterval(function () {
            minutes = timer / 60, 10;
            seconds = timer % 60, 10;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    startTimer(60 * 5, auction.time_limit)

    return (
        <Container>
            <div className="divCardDescription">
                <img src={ auction.images } alt={ auction.name } />

                <div className="divDescription">
                    <div className="divTimeAuction">
                        <img src={clock} />
                        <time>{ auction.time_limit }</time>
                    </div>

                    <div>
                        <h4>{ auction.name }</h4>

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