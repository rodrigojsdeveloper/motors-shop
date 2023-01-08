import { IAuctionProps, IProductProps } from "../../interfaces"
import { api } from "../../services/api"
import { Button } from "../Button"
import { HeaderModal } from "../HeaderModal"
import { Container } from "./style"

interface IModalDeleteProduct {
  setCloseModalDeleteProduct: React.Dispatch<React.SetStateAction<boolean>>
  product: IAuctionProps | IProductProps
  link: string
}

const ModalDeleteProduct = ({ setCloseModalDeleteProduct, product, link }: IModalDeleteProduct) => {

  return (
    <Container>
      <HeaderModal title="Excluir anúncio" setCloseModal={ setCloseModalDeleteProduct } />

      <div>
        <h3>Tem certeza que deseja remover este anúncio?</h3>

        <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio e removerá esse produto do seu servidor.</p>

        <div>
          <Button size="buttonSizeUserDetailsMedium" color="buttonColorGrayModalEditAddress" type="button" onClick={ () => setCloseModalDeleteProduct(false) }>Cancelar</Button>
          <Button size="buttonSizeModalDeleteProduct" color="buttonColorRedModalDeleteProduct" type="button" onClick={ () => {
            
            api.delete(`/${link}/${ product.id }`)
            .then(_ => setCloseModalDeleteProduct(false))
            .catch(error => console.error(error))
          } }>Sim, excluir anúncio</Button>
        </div>
      </div>
    </Container>
  )
}

export { ModalDeleteProduct }
