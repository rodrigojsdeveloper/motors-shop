import { ModalDeleteProduct } from "../ModalDeleteProduct";
import { ModalEditProduct } from "../ModalEditProduct";
import { ModalBackground } from "../ModalBackground";
import { IProductProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { PriceProduct } from "../PriceProduct";
import { KmProduct } from "../KmProduct";
import { YearProduct } from "../YearProduct";
import { DescriptionProduct } from "../DescriptionProduct";
import { TitleProduct } from "../TitleProduct";
import { ImageProduct } from "../ImageProduct";

interface IProduct {
  product: IProductProps;
  listCarsFunc: (car: IProductProps) => void;
  listMotorcyclesFunc: (motorcycle: IProductProps) => void;
}

const AdvertiserProduct = ({
  product,
  listCarsFunc,
  listMotorcyclesFunc,
}: IProduct) => {
  const navigate = useNavigate();

  const [openModalEditProduct, setOpenModalEditProduct] =
    useState<boolean>(false);

  const [productRequest, setProductRequest] = useState<IProductProps>(
    {} as IProductProps
  );

  const [closeModalDeleteProduct, setCloseModalDeleteProduct] =
    useState<boolean>(false);

  useEffect(() => {
    api
      .get(`/products/${product.id}`)
      .then((res) => setProductRequest(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {openModalEditProduct && (
        <ModalBackground>
          <ModalEditProduct
            product={productRequest}
            setOpenModalEditProduct={setOpenModalEditProduct}
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
          />
        </ModalBackground>
      )}
      {closeModalDeleteProduct && (
        <ModalBackground>
          <ModalDeleteProduct
            product={productRequest}
            setCloseModalDeleteProduct={setCloseModalDeleteProduct}
            listCarsFunc={listCarsFunc}
            listMotorcyclesFunc={listMotorcyclesFunc}
          />
        </ModalBackground>
      )}
      <Container>
        <ImageProduct src={product?.cover_image} alt={product?.title} />

        <TitleProduct title={product?.title} />

        <DescriptionProduct description={product?.description} />
        <div className="divKmYearPrice">
          <div>
            <YearProduct year={product?.year} />
            <KmProduct km={product?.kilometers} />
          </div>

          <PriceProduct price={product?.price} />
        </div>

        <div className="divButtons">
          <Button
            color="buttonColorWhiteEditAndShowProduct"
            size="buttonSizeEditProduct"
            type="button"
            onClick={() => setOpenModalEditProduct(true)}
          >
            Editar
          </Button>
          <Button
            color="buttonColorWhiteEditAndShowProduct"
            size="buttonSizeShowProduct"
            type="button"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            Ver como
          </Button>
        </div>
      </Container>
    </>
  );
};

export { AdvertiserProduct };
