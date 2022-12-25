import { IProductProps, Product } from "../Product"
import { Container } from "./style"

interface IListProducts {
    listName: string;
    products: IProductProps[]
}

const ListProducts = ({ listName, products }: IListProducts) => {

    return (
        <Container>
            <h2>{ listName }</h2>

            <menu>
                {
                    products.map((p: IProductProps) => <Product product={ p } key={ p.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListProducts }
