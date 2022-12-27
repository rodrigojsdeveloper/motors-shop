import { Container } from "./style"
import close from "../../assets/x.svg"
import { Input } from "../Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { api } from "../../services/api"
import { IUserProps } from "../../interfaces"

interface IModalEditAddress {
    setOpenModalEditAddress: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalEditAddress = ({ setOpenModalEditAddress }: IModalEditAddress) => {

    const token = sessionStorage.getItem("Motors shop: token")

    const [ user, setUser ] = useState<any>()

    const schema = yup.object().shape({
        zip_code: yup.number().required("CEP obrigatória"),
        country: yup.string().required("País obrigatório"),
        state: yup.string().required("Estado obrigatório"),
        city: yup.string().required("Cidade obrigatório"),
        district: yup.string().required("Bairro obrigatório"),
        street: yup.string().required("Rua obrigatória"),
        number: yup.number().required("Número obrigatório"),
        complement: yup.string(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {

        const address = {
            zip_code: data.zip_code,
            country: data.country,
            state: data.state,
            city: data.city,
            district: data.district,
            street: data.street,
            number: data.number,
            complement: data.complement,
        }

        data.address = address
    }

    token && useEffect(() => {

        api.get("/profile", {
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        })
        .then(res => setUser(res.data))
        .catch(error => console.error(error))

    }, [])

    return (
        <Container>
            <header>
                <h2>Editar endereço</h2>

                <img src={ close } alt="x" onClick={ () => setOpenModalEditAddress(false) } />
            </header>

            <form onSubmit={ handleSubmit(onSubmitFunction) }>
                <h3>Infomações de endereço</h3>

                <div>
                    <Input
                    label="CEP"
                    name="zip_code"
                    register={ register }
                    placeholder="00000-000"
                    autoComplete="off"
                    type="number"
                    error={ errors.zip_code?.message }
                    required={ true }
                    size="inputModalEditAddressLarge"
                    value={ user?.address.zip_code }
                    />
                    <Input
                    label="País"
                    name="country"
                    register={ register }
                    placeholder="Ex: United States"
                    autoComplete="off"
                    type="text"
                    error={ errors.country?.message }
                    required={ true }
                    size="inputModalEditAddressLarge"
                    value={ user?.address.country }
                    />
                    <div className="divInputs">
                        <Input
                        label="Estado"
                        name="state"
                        register={ register }
                        placeholder="Digitar estado"
                        autoComplete="off"
                        type="text"
                        error={ errors.state?.message }
                        required={ true }
                        size="inputModalEditAddressMedium"
                        className="changeInput"
                        value={ user?.address.state }
                        />
                        <Input
                        label="Cidade"
                        name="city"
                        register={ register }
                        placeholder="Digitar cidade"
                        autoComplete="off"
                        type="text"
                        error={ errors.city?.message }
                        required={ true }
                        size="inputModalEditAddressMedium"
                        className="changeInput"
                        value={ user?.address.city }
                        />
                    </div>
                    <Input
                    label="Bairro"
                    name="district"
                    register={ register }
                    placeholder="Digitar bairro"
                    autoComplete="off"
                    type="text"
                    error={ errors.district?.message }
                    required={ true }
                    size="inputModalEditAddressLarge"
                    value={ user?.address.district }
                    />
                    <Input
                    label="Rua"
                    name="street"
                    register={ register }
                    placeholder="Digitar rua"
                    autoComplete="off"
                    type="text"
                    error={ errors.street?.message }
                    required={ true }
                    size="inputModalEditAddressLarge"
                    value={ user?.address.street }
                    />
                    <div className="divInputs">
                        <Input
                        className="inputNumber"
                        label="Número"
                        name="number"
                        register={ register }
                        placeholder="Digitar número"
                        autoComplete="off"
                        type="number"
                        error={ errors.number?.message }
                        required={ true }
                        size="inputModalEditAddressMedium"
                        value={ user?.address.number }
                        />
                        <Input
                        className="inputComplement"
                        label="Complemento"
                        name="complement"
                        register={ register }
                        placeholder="Ex: Apart 307"
                        autoComplete="off"
                        type="text"
                        error={ errors.complement?.message }
                        required={ true }
                        size="inputModalEditAddressMedium"
                        value={ user?.address.complement }
                        />
                    </div>
                </div>

                <div className="divButtons">
                    <Button color="buttonColorGrayModalEditAddress" size="buttonSizeModalEditAddressSmall" type="button" onClick={ () => setOpenModalEditAddress(false) }>Cancelar</Button>
                    <Button color="buttonColorBlueLogin" size="buttonSizeModalEditAddressMedium" type="button">Salvar alteração</Button>
                </div>
            </form>
        </Container>
    )
}

export { ModalEditAddress }
