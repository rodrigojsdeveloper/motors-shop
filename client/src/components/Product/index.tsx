import { Container } from "./style"

interface IUserProps {
    name: string
}

export interface IProductProps {
    name: string
    image: string
    description: string
    year: number
    kilometers: number
    price: string
    user: IUserProps
}

const Product = (product: any) => {

    return (
        <Container>
            <img src={ product.image } alt={ product.name } title={ product.name } />

            <h4>{ product.name }</h4>

            <p>{ product.description }</p>

            <div>
                <img src="" />
                <h6>{ product.user.name }</h6>
            </div>

            <div className="divKmYearPrice">
                <div>
                    <p>{ product.kilometers } KM</p>
                    <p>{ product.year }</p>
                </div>

                <span>R$ { product.price }</span>
            </div>
        </Container>
    )
}

export { Product }
