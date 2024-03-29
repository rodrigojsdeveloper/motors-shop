import { ModalDeleteProduct } from "../Modals/modalDeleteProduct";
import { DescriptionProduct } from "../DescriptionProduct";
import { ModalEditProduct } from "../Modals/modalEditProduct";
import { ModalBackground } from "../ModalBackground";
import { PriceProduct } from "../PriceProduct";
import { TitleProduct } from "../TitleProduct";
import { ImageProduct } from "../ImageProduct";
import { YearProduct } from "../YearProduct";
import { IProduct } from "../../interfaces";
import { KmProduct } from "../KmProduct";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { useState } from "react";

const AdvertiserProduct = ({ product }: IProduct) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  return (
    <>
      {openModalEdit && (
        <ModalBackground>
          <ModalEditProduct
            product={product}
            setOpenModalEdit={setOpenModalEdit}
            setOpenModalDelete={setOpenModalDelete}
          />
        </ModalBackground>
      )}
      {openModalDelete && (
        <ModalBackground>
          <ModalDeleteProduct
            setOpenModal={setOpenModalDelete}
            productId={product.id}
          />
        </ModalBackground>
      )}
      <Container>
        <ImageProduct src={product?.cover_image} alt={product?.model} />

        <TitleProduct title={product?.model} />

        <DescriptionProduct description={product?.description} />
        <div className="divKmYearPrice">
          <div>
            <KmProduct km={product?.kilometers} />
            <YearProduct year={product?.year} />
          </div>

          <PriceProduct price={product?.price} />
        </div>

        <div className="divButtons">
          <Button
            color="white-grey"
            size="80px"
            type="button"
            onClick={() => setOpenModalEdit(true)}
          >
            Editar
          </Button>
          <Link to={`/products/${product.id}`}>Ver como</Link>
        </div>
      </Container>
    </>
  );
};

export { AdvertiserProduct };
