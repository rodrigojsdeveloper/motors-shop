import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Container } from "./style"
import { Button } from "../Button"
import { useState } from "react"
import { Input } from "../Input"
import * as yup from "yup"
import { api } from "../../services/api"
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
  } from "react-icons/ai";

interface IFormSignUp {
    setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const FormSignUp = ({ setOpenModalSuccess }: IFormSignUp) => {

    const [ changeColorBuyer, setChangeColorBuyer ] = useState<boolean>(true)

    const [ changeColorAdvertiser, setChangeColorAdvertiser ] = useState<boolean>(false)

    const [ buyerOrAdvertiser, setBuyerOrAdvertiser ] = useState<boolean>(true)

    const [ typeInput, setTypeInput ] = useState<boolean>(false);

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true);

    const [ typeInputRepeatPassword, setTypeInputRepeatPassword ] = useState<boolean>(false);

    const [ showOutlineShowRepeatPassword, setShowOutlineShowRepeatPassword ] = useState<boolean>(true);

    const [ load, setLoad ] = useState<boolean>(false)


    const schema = yup.object().shape({

        name: yup.string().required("Name obrigatório"),
        email: yup.string().required("Email obrigatória").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters"),
        cpf: yup.string().required("CPF obrigatória"),
        cellphone: yup.string().required("Celular obrigatória"),
        birthdate: yup.string().required("Data obrigatória"),
        description: yup.string().required("Descrição obrigatória"),
        zip_code: yup.number().required("CEP obrigatória"),
        country: yup.string().required("País obrigatório"),
        state: yup.string().required("Estado obrigatório"),
        city: yup.string().required("Cidade obrigatório"),
        district: yup.string().required("Bairro obrigatório"),
        street: yup.string().required("Rua obrigatória"),
        number: yup.number().required("Número obrigatório"),
        complement: yup.string(),
        repeat_password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters").oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {

        setLoad(true)

        data.is_seller = buyerOrAdvertiser

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

        Reflect.deleteProperty(data, "repeat_password")

        api.post("/users/signup", data)
        .then(_ => setOpenModalSuccess(true))
        .catch(error => console.error(error))
        .finally(() => setLoad(false))
    }

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            <h2>Cadastro</h2>

            <h4>Informações pessoais</h4>

            <Input
            label="Nome"
            name="name"
            register={ register }
            placeholder="Ex: Rodrigo Silva"
            autoComplete="off"
            type="text"
            error={ errors.name?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="Email"
            name="email"
            register={ register }
            placeholder="Ex: johndoe@org.com"
            autoComplete="off"
            type="text"
            error={ errors.email?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="CPF"
            name="cpf"
            register={ register }
            placeholder="000.000.000-00"
            autoComplete="off"
            type="number"
            error={ errors.cpf?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="Celular"
            name="cellphone"
            register={ register }
            placeholder="(DDD) 9 9999-9999"
            autoComplete="off"
            type="text"
            error={ errors.cellphone?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="Data de nascimento"
            name="birthdate"
            register={ register }
            placeholder="00/00/0000"
            autoComplete="off"
            type="text"
            error={ errors.birthdate?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="Descrição"
            name="description"
            register={ register }
            placeholder="Digitar descrição"
            autoComplete="off"
            type="text"
            error={ errors.description?.message }
            required={ true }
            size="inputSignUp"
            />
            
            <h4>Informações de endereço</h4>

            <Input
            label="CEP"
            name="zip_code"
            register={ register }
            placeholder="00000-000"
            autoComplete="off"
            type="number"
            error={ errors.zip_code?.message }
            required={ true }
            size="inputSignIn"
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
            size="inputSignIn"
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
                size="inputSignUpSmall"
                className="changeInput"
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
                size="inputSignUpSmall"
                className="changeInput"
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
            size="inputSignIn"
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
            size="inputSignIn"
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
                size="inputSignUpSmall"
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
                size="inputSignUpSmall"
                />
            </div>

            <h4>Tipo de conta</h4>

            <div className="divInputs">
                <Button onClick={ () => {
                    setChangeColorBuyer(true)
                    setChangeColorAdvertiser(false)
                    setBuyerOrAdvertiser(true)
                } } style={ changeColorBuyer ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Comprador</Button>
                <Button onClick={ () => {
                    setChangeColorBuyer(false)
                    setChangeColorAdvertiser(true)
                    setBuyerOrAdvertiser(false)
                    } } style={ changeColorAdvertiser ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Anunciante</Button>
            </div>

            <label className="labelPassword">Senha { !!errors.password && <span> - {errors.password?.message as string}</span>}</label>
            <div className="divInputPassword">
            <input
                placeholder="Senha"
                type={typeInput ? "text" : "password"}
                {...register("password")}
                required={true}
                onChange={(e: any) => {
                if (e.target.value == "") {
                    setShowOutlineShow(false);

                    setTypeInput(false);
                }
                }}
            />
            {showOutlineShow ? (
                <AiOutlineEyeInvisible
                size={ 20 }
                className="biShow"
                onClick={() => {
                    setTypeInput(true);

                    setShowOutlineShow(false);
                }}
                />
            ) : (
                <AiOutlineEye
                size={ 20 }
                className="biShow"
                onClick={() => {
                    setTypeInput(false);

                    setShowOutlineShow(true);
                }}
                />
            )}
            </div>

            <label className="labelPassword">Repetir senha { !!errors.password && <span> - {errors.password?.message as string}</span>}</label>
            <div className="divInputPassword">
            <input
                placeholder="Repita a senha"
                type={typeInputRepeatPassword ? "text" : "password"}
                {...register("repeat_password")}
                required={true}
                onChange={(e: any) => {
                if (e.target.value == "") {
                    setShowOutlineShowRepeatPassword(false);

                    setTypeInputRepeatPassword(false);
                }
                }}
            />
            {showOutlineShowRepeatPassword ? (
                <AiOutlineEyeInvisible
                size={ 20 }
                className="biShow"
                onClick={() => {
                    setTypeInputRepeatPassword(true);

                    setShowOutlineShowRepeatPassword(false);
                }}
                />
            ) : (
                <AiOutlineEye
                size={ 20 }
                className="biShow"
                onClick={() => {
                    setTypeInputRepeatPassword(false);

                    setShowOutlineShowRepeatPassword(true);
                }}
                />
            )}
            </div>

            <Button className="buttonSubmit" size="buttonSizeLogin" color="buttonColorBlueLogin" type="submit" disabled={ load }>{
                load ? "Finalizando..." : "Finalizar cadastro"
            }</Button>
        </Container>
    )
}

export { FormSignUp }
