import { Button } from "../Button"
import { Input } from "../Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Container } from "./style"
import { useForm } from "react-hook-form"
import { useState } from "react"


const FormSignUp = () => {

    const [ changeColorBuyer, setChangeColorBuyer ] = useState<boolean>(true)

    const [ changeColorAdvertiser, setChangeColorAdvertiser ] = useState<boolean>(false)

    const schema = yup.object().shape({

        name: yup.string().required("Name obrigatório"),
        email: yup.string().required("Email obrigatória").email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
        cpf: yup.string().required("CPF obrigatória"),
        cellphone: yup.string().required("Celular obrigatória"),
        birthdate: yup.string().required("Data obrigatória"),
        description: yup.string().required("Descrição obrigatória"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: object) => console.log(data)

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
            name="cep"
            register={ register }
            placeholder="00000-000"
            autoComplete="off"
            type="number"
            error={ errors.cep?.message }
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
                } } style={ changeColorBuyer ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Comprador</Button>
                <Button onClick={ () => {
                    setChangeColorBuyer(false)
                    setChangeColorAdvertiser(true)
                    } } style={ changeColorAdvertiser ? { background: "#4529E6", color: "#fff", borderColor: "#4529E6" } : { background: "#fff", color: "#000", borderColor: "#ADB5BD" } } size="buttonSizeSignUp" color="buttonColorWhiteSignUp" type="button" className="changeButton">Anunciante</Button>
            </div>

            <Input
            label="Senha"
            name="password"
            register={ register }
            placeholder="Digitar senha"
            autoComplete="off"
            type="text"
            error={ errors.password?.message }
            required={ true }
            size="inputSignIn"
            />
            <Input
            label="Senha"
            name="password"
            register={ register }
            placeholder="Digitar senha"
            autoComplete="off"
            type="text"
            error={ errors.password?.message }
            required={ true }
            size="inputSignIn"
            />

            <Button className="buttonSubmit" size="buttonSizeLogin" color="buttonColorBlueLogin" type="submit">Finalizar cadastro</Button>
        </Container>
    )
}

export { FormSignUp }
