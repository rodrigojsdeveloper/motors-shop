import { Container } from "./style"
import rightArrow from "../../assets/Group 29.svg"
import clock from "../../assets/Group 13.svg"

const CardAuction = (auction: any) => {

    return (
        <Container>
            <div className="divCardDescription">
                <img src={ auction.product.image } alt={ auction.product.name } />

                <div className="divDescription">
                    <div className="divTimeAuction">
                        <img src={clock} />
                        <time>{ auction.time_limit }</time>
                    </div>

                    <div>
                        <h4>{ auction.product.name }</h4>

                        <p>{ auction.product.description }</p>

                        <div className="divUser">
                            <img />
                            <h6>{ auction.product.user.name }</h6>
                        </div>

                        <div className="divYearKMPrice">
                            <div>
                                <p>{ auction.product.year }</p>
                                <p>{ auction.product.kilometers } KM</p>
                            </div>

                            <span>R$ { auction.product.price }</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divRedirectsToAuction">
                <p>Acessar página do leilão</p>

                <img src={ rightArrow } alt="right arrow" />
            </div>
        </Container>
    )
}

export { CardAuction }
