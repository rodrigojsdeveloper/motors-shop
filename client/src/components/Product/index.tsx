import { Container } from "./style"

interface IUserProps {
    name: string
}

export interface IProductProps {
    id: string;
    name: string;
    description: string;
    year: number;
    kilometers: number;
    ad_type: "car" | "motorbike" | string;
    price: string;
    vehicle_type: string;
    images: string;
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
