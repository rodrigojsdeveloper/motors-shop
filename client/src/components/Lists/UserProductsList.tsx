import { ProductContext } from "../../contexts/product.context";
import { UserProductsProduct } from "../UserProductsProduct";
import { IUserProductsList } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { useContext, useEffect } from "react";
import { Container } from "./style";
import { Buttons } from "../Buttons";

const UserProductsList = ({ products, user }: IUserProductsList) => {
  const {
    disabledNextPage,
    disabledPreviousPage,
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    productsPerPage,
    paginatedProducts,
  } = useContext(ProductContext);

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1);
    setDisabledNextPage(currentPage * productsPerPage >= products.length);
  }, [currentPage, products]);

  return (
    <Container>
      {products.length > 0 ? (
        <>
          <menu>
            {paginatedProducts.map((product) => (
              <UserProductsProduct
                product={product}
                key={product.id}
                user={user}
              />
            ))}
          </menu>
          <Buttons
            disabledNextPage={disabledNextPage}
            disabledPreviousPage={disabledPreviousPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : (
        <EmptyMessage message="Não há carros" />
      )}
    </Container>
  );
};

export { UserProductsList };
