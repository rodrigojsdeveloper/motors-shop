import { ProductContext } from "../../contexts/product.context";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { useContext, useEffect } from "react";
import { Buttons } from "../Buttons";
import { Product } from "../Product";
import { Container } from "./style";

const List = () => {
  const {
    products,
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

  const publishedProducts = products.filter(
    (product) => product.is_published === true
  );

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1);
    setDisabledNextPage(
      currentPage * productsPerPage >= publishedProducts.length
    );
  }, [currentPage, publishedProducts]);

  return (
    <Container>
      {publishedProducts.length > 0 ? (
        <>
          <menu>
            {paginatedProducts.map((product: IProductProps) => (
              <Product product={product} key={product.id} />
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
        <EmptyMessage message="Não há veículos" />
      )}
    </Container>
  );
};

export { List };
