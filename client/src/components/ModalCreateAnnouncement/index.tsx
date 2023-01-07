import { Container } from "./style"
import { Button } from "../Button"
import { useState } from "react"
import { Input } from "../Input"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { TextArea } from "../TextArea"
import { HeaderModal } from "../HeaderModal"

interface IModalCreateAnnouncement {
    setCloseModalCreateAnnouncement: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCreateAnnouncement = ({ setCloseModalCreateAnnouncement }: IModalCreateAnnouncement) => {

    const [ changeColorBuyer, setChangeColorBuyer ] = useState<boolean>(true)

    const [ changeColorAdvertiser, setChangeColorAdvertiser ] = useState<boolean>(false)

    const [ buyerOrAdvertiser, setBuyerOrAdvertiser ] = useState<boolean>(true)

    const [ changeColorBuyerVehicleType, setChangeColorBuyerVehicleType ] = useState<boolean>(true)

    const [ changeColorAdvertiserVehicleType, setChangeColorAdvertiserVehicleType ] = useState<boolean>(false)

    const [ buyerOrAdvertiserVehicleType, setBuyerOrAdvertiserVehicleType ] = useState<boolean>(true)

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
            <HeaderModal title="Criar anúncio" setCloseModal={ setCloseModalCreateAnnouncement } />

            <form onSubmit={ handleSubmit(onSubmitFunction) }>
                <div>
                    <h4>Tipo de anúncio</h4>
                    <div className="divButtons">

                        <Button onClick={ () => {
                            setChangeColorBuyer(true)
                            setChangeColorAdvertiser(false)
                            setBuyerOrAdvertiser(true)
                        } } style={ changeColorBuyer ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Venda</Button>
                        <Button onClick={ () => {
                            setChangeColorBuyer(false)
                            setChangeColorAdvertiser(true)
                            setBuyerOrAdvertiser(false)
                            } } style={ changeColorAdvertiser ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Leilão</Button>
                    </div>
                </div>

                <h4>Informações do veículo</h4>

                <Input
                label="Título"
                name="title"
                register={ register }
                placeholder="Digitar título"
                autoComplete="off"
                type="text"
                error={ errors.title?.message }
                required={ true }
                size="inputModalEditAddressLarge"    
                />

                <div>
                    <Input
                    label="Ano"
                    name="year"
                    register={ register }
                    placeholder="Digitar ano"
                    autoComplete="off"
                    type="number"
                    error={ errors.year?.message }
                    required={ true }
                    size="inputModalCreateAnnouncementSmall"    
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
                    />
                    <Input
                    label="Preço"
                    name="price"
                    register={ register }
                    placeholder="Digitar preço"
                    autoComplete="off"
                    type="text"
                    error={ errors.price?.message }
                    required={ true }
                    size="inputModalCreateAnnouncementSmall"    
                    />
                </div>
                <TextArea />

                <div>
                    <h4>Tipo de veículo</h4>
                    <div className="divButtons">

                        <Button onClick={ () => {
                            setChangeColorBuyerVehicleType(true)
                            setChangeColorAdvertiserVehicleType(false)
                            setBuyerOrAdvertiserVehicleType(true)
                        } } style={ changeColorBuyerVehicleType ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Carro</Button>
                        <Button onClick={ () => {
                            setChangeColorBuyerVehicleType(false)
                            setChangeColorAdvertiserVehicleType(true)
                            setBuyerOrAdvertiserVehicleType(false)
                            } } style={ changeColorAdvertiserVehicleType ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Moto</Button>
                    </div>
                </div>

                <Input
                label="Imagem da capa"
                name="cover_image"
                register={ register }
                placeholder="Inserir URL da imagem"
                autoComplete="off"
                type="text"
                error={ errors.cover_image?.message }
                required={ true }
                size="inputModalEditAddressLarge"
                />
                <Input
                label="1º Imagem da galeria"
                name="gallery_image"
                register={ register }
                placeholder="Inserir URL da imagem"
                autoComplete="off"
                type="text"
                error={ errors.gallery_image?.message }
                required={ true }
                size="inputModalEditAddressLarge"
                />

                <div>
                    <Button color="buttonColorGrayModalEditAddress" size="buttonSizeModalEditAddressSmall" type="button" onClick={ () => setCloseModalCreateAnnouncement(false) }>Cancelar</Button>
                    <Button color="buttonColorBlueLogin" size="buttonSizeModalEditAddressMedium" type="button">Criar anúncio</Button>
                </div>
            </form>
        </Container>
    )
}

export { ModalCreateAnnouncement }
