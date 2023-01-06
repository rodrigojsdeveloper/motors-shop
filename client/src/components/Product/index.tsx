import { IProductProps } from "../../interfaces"
import { AvatarUser } from "../AvatarUser"
import { Container } from "./style"

interface IProduct {
    product: IProductProps
}

const Product = ({ product }: any) => {

    return (
        <Container>
            <img src={ product.cover_image } alt={ product.title } title={ product.title } />

            <h4>{ product.title }</h4>

            <p>{ product.description }</p>

            <div>
                <AvatarUser userName={ product.user.name } />
                <h6>{ product.user.name }</h6>
            </div>

            <div className="divKmYearPrice">
                <div>
                    <p>{ product.year }</p>
                    <p>{ product.kilometers } KM</p>
                </div>

                <span>{ product.price }</span>
            </div>
        </Container>
    )
}

export { Product }
