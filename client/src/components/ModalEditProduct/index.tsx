import { useState } from "react"
import { HeaderModal } from "../HeaderModal"
import { Container } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "../Button"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { IAuctionProps } from "../../interfaces"

interface IModalEditProduct {
  setOpenModalEditProduct: React.Dispatch<React.SetStateAction<boolean>>
  auction: IAuctionProps
}

const ModalEditProduct = ({ auction, setOpenModalEditProduct }: IModalEditProduct) => {

  const [ changeColorBuyer, setChangeColorBuyer ] = useState<boolean>(true)

  const [ changeColorAdvertiser, setChangeColorAdvertiser ] = useState<boolean>(false)
  
  const [ buyerOrAdvertiser, setBuyerOrAdvertiser ] = useState<boolean>(true)
  
  const [ changeColorBuyerVehicleType, setChangeColorBuyerVehicleType ] = useState<boolean>(true)
  
  const [ changeColorAdvertiserVehicleType, setChangeColorAdvertiserVehicleType ] = useState<boolean>(false)
  
  const [ buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType ] = useState<boolean>(true)

  const [ changePostedToYes, setChangPostedToYes ] = useState<boolean>(true)

  const [ changePostedToNo, setChangPostedToNo ] = useState<boolean>(false)
  
  const schema = yup.object().shape({
  
      title: yup.string().required("Título obrigatório"),
      description: yup.string().required("Descrição obrigatória"),
      year: yup.number().required("Ano obrigatório"),
      kilometers: yup.number().required("Kilometros obrigatório"),
      price: yup.string().required("Preço obrigatório"),
      cover_image: yup.string().required("Imagem da capa obrigatória"),
      gallery_image: yup.string().required("1º Imagem da galeria obrigatória"),
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  })
  
  const onSubmitFunction = (data: any) => {}

  return (
    <Container>
      <HeaderModal title="Editar anúncio" setCloseModal={ setOpenModalEditProduct } />

        <form onSubmit={ handleSubmit(onSubmitFunction) }>
            <div>
                <h4>Tipo de anúncio</h4>
                <div className="divButtons">

                    <Button onClick={ () => {
                        if(auction.ad_type == "sale") {
                            setChangeColorBuyer(true)
                            setChangeColorAdvertiser(false)
                            setBuyerOrAdvertiser(true)
                        }
                    } } style={ changeColorBuyer ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Venda</Button>
                    <Button onClick={ () => {
                        if(auction.ad_type == "auction") {
                            setChangeColorBuyer(false)
                            setChangeColorAdvertiser(true)
                            setBuyerOrAdvertiser(false)
                        }
                        } } style={ changeColorAdvertiser ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Leilão</Button>
                </div>
            </div>

            <h4>Informações do veículo</h4>

            <Input
            label="Título"
            name="title"
            register={ register }
            placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
            autoComplete="off"
            type="text"
            error={ errors.title?.message }
            required={ true }
            size="inputModalEditAddressLarge"    
            value={ auction.title }
            />

            <div>
                <Input
                label="Ano"
                name="year"
                register={ register }
                placeholder="2018"
                autoComplete="off"
                type="number"
                error={ errors.year?.message }
                required={ true }
                size="inputModalCreateAnnouncementSmall"   
                value={ auction.year } 
                />
                <Input
                label="Quilometragem"
                name="kilometers"
                register={ register }
                placeholder="0"
                autoComplete="off"
                type="number"
                error={ errors.kilometers?.message }
                required={ true }
                size="inputModalCreateAnnouncementSmall" 
                className="inputKilometers"
                value={ auction.kilometers }   
                />
                <Input
                label="Preço"
                name="price"
                register={ register }
                placeholder="50.000,00"
                autoComplete="off"
                type="text"
                error={ errors.price?.message }
                required={ true }
                size="inputModalCreateAnnouncementSmall"    
                value={ auction.price }
                />
            </div>
            <TextArea value={ auction.description } />

            <div>
                <h4>Tipo de veículo</h4>
                <div className="divButtons">

                    <Button onClick={ () => {
                        if(auction.vehicle_type == "car") {
                            setChangeColorBuyerVehicleType(true)
                            setChangeColorAdvertiserVehicleType(false)
                            setBuyerOrAdvertiserVehicleType(true)
                        }
                    } } style={ changeColorBuyerVehicleType ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Carro</Button>
                    <Button onClick={ () => {
                        if(auction.vehicle_type == "motorbike") {
                            setChangeColorBuyerVehicleType(false)
                            setChangeColorAdvertiserVehicleType(true)
                            setBuyerOrAdvertiserVehicleType(false)
                        }
                        } } style={ changeColorAdvertiserVehicleType ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Moto</Button>
                </div>
            </div>

            <div>
                <h4>Publicado</h4>
                <div className="divButtons">

                    <Button onClick={ () => {
                        if(auction.is_published) {
                            setChangPostedToYes(true)
                            setChangPostedToNo(false)
                        }
                    } } style={ changePostedToYes ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Sim</Button>
                    <Button onClick={ () => {
                        if(!auction.is_published) {
                            setChangPostedToNo(true)
                            setChangPostedToYes(false)
                        }
                        } } style={ changePostedToNo ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Não</Button>
                </div>
            </div>

            <Input
            label="Imagem da capa"
            name="cover_image"
            register={ register }
            placeholder="https://image.com"
            autoComplete="off"
            type="text"
            error={ errors.cover_image?.message }
            required={ true }
            size="inputModalEditAddressLarge"
            value={ auction.cover_image }
            />
            <Input
            label="1º Imagem da galeria"
            name="gallery_image"
            register={ register }
            placeholder="https://image.com"
            autoComplete="off"
            type="text"
            error={ errors.gallery_image?.message }
            required={ true }
            size="inputModalEditAddressLarge"
            value={ auction.gallery_image }
            />

            <div>
                <Button color="buttonColorGrayModalEditAddress" size="buttonSizeModalEditProduct" type="button" onClick={ () => setOpenModalEditProduct(false) }>Excluir anúncio</Button>
                <Button color="buttonColorBlueLogin" size="buttonSizeModalEditAddressMedium" type="button">Salvar alterações</Button>
            </div>
      </form>
    </Container>
  )
}

export { ModalEditProduct }
