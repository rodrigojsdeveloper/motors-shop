import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Container } from "./style"
import { Button } from "../Button"
import { useState } from "react"
import { Input } from "../Input"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"


const FormSignIn = () => {

    const navigate = useNavigate()

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true)

    const [ typeInput, setTypeInput ] = useState<boolean>(false)

    const [ load, setLoad ] = useState<boolean>(false)

    const schema = yup.object().shape({

        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: object) => console.log(data)

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            <h2>Login</h2>

            <Input
            label="Usuário"
            name="username"
            register={ register }
            placeholder="Digitar usuário"
            autoComplete="off"
            type="text"
            error={ errors.usuario?.message }
            required={ true }
            size="inputSignIn"
            />

            <label>Senha { errors.senha?.message as string }</label>
            <div className="inputPassword">
                <input
                { ...register("password") }
                placeholder="Digitar senha"
                type={ typeInput ? "text" : "password" }
                required={ true }
                onChange={ (e: any) => {

                    if(e.target.value == '') {

                        setShowOutlineShow(true)

                        setTypeInput(false)
                    }
                } }
                />
                {
                    showOutlineShow ? (
                        
                        <AiOutlineEyeInvisible className="biShow" onClick={ () => {
                        
                            setTypeInput(true)
                            
                            setShowOutlineShow(false)

                        } } />
                    
                        ) : (
                    
                        <AiOutlineEye className="biShow" onClick={ () => {

                            setTypeInput(false)

                            setShowOutlineShow(true)

                        } } />
                    )
                }
            </div>

            <h3>Esqueci minha senha</h3>

            <Button size="buttonSizeLogin" color="buttonColorBlueLogin" type="submit" disabled={ load }>{
                
                load ? "Entrando..." : "Entrar"
                
            }</Button>
            <p>Ainda não possui conta?</p>
            <Button size="buttonSizeLogin" color="buttonColorWhiteHeader" type="button" onClick={ () => navigate("/signup") }>Cadastrar</Button>
        </Container>
    )
}

export { FormSignIn }
