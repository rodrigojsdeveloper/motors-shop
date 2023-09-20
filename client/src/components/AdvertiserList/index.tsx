import { ProductContext } from "../../contexts/product.context";
import { AdvertiserProduct } from "../AdvertiserProduct";
import { IProductProps } from "../../interfaces";
import { EmptyMessage } from "../EmptyMessage";
import { useContext, useEffect } from "react";
import { Container } from "../List/style";
import { Buttons } from "../Buttons";

const AdvertiserList = () => {
  const {
    advertiserProducts,
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
    setDisabledNextPage(
      currentPage * productsPerPage >= advertiserProducts.length
    );
  }, [currentPage, advertiserProducts]);

  return (
    <Container>
      {advertiserProducts.length > 0 ? (
        <>
          <menu>
            {paginatedProducts.map((product: IProductProps) => (
              <AdvertiserProduct product={product} key={product.id} />
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

export { AdvertiserList };
