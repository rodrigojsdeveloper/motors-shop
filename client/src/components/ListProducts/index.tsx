import { IListProducts, IProductProps } from "../../interfaces"
import { Product } from "../Product"
import { Container } from "./style"

const ListProducts = ({ listName, products }: IListProducts) => {

    return (
        <Container id="carsAndMotorcycles">
            <h2>{ listName }</h2>

            <menu>
                {
                    products.map((p: any) => <Product product={ p } key={ p.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListProducts }
