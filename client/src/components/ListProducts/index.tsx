import { IProductProps, Product } from "../Product"
import { Container } from "./style"

interface IListProducts {
    listName: string;
}

const ListProducts = ({ listName }: IListProducts) => {

    return (
        <Container>
            <h2>{ listName }</h2>

            <menu>
                {/*
                    products.map((p: any) => <Product product={ p } key={ p.id } />)
                */}
            </menu>
        </Container>
    )
}

export { ListProducts }
