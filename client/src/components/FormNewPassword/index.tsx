import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import * as yup from "yup";
import { useState } from "react";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
  } from "react-icons/ai";
import { Button } from "../Button";
import { api } from "../../services/api";
import { IUserProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";

const FormNewPassword = () => {

    const navigate = useNavigate()

    const [ typeInput, setTypeInput ] = useState<boolean>(false);

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true);

    const [ typeInputRepeatPassword, setTypeInputRepeatPassword ] = useState<boolean>(false);

    const [ showOutlineShowRepeatPassword, setShowOutlineShowRepeatPassword ] = useState<boolean>(true);

    const [ user, setUser ] = useState<IUserProps>({} as IUserProps)

    const schema = yup.object().shape({

        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters"),
        repeat_password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters").oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {

        Reflect.deleteProperty(data, "repeat_password")

        api.post(`/email/${data.email}`)
        .then(res => setUser(res.data))
        .catch(error => console.error(error))

        Reflect.deleteProperty(data, "email")

        api.patch(`/users/${user.id}`)
        .then(_ => navigate("/signin"))
        .catch(error => console.error(error))
    }

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>

            <h2>Nova Senha</h2>
            
            <Input
            label="Email"
            name="email"
            register={ register }
            placeholder="Digitar email"
            autoComplete="off"
            type="email"
            error={ errors.email?.message }
            required={ true }
            size="inputSignIn"
            />

            <div>
                <label>Senha { !!errors.password && <span> - {errors.password?.message as string}</span>}</label>
                <div>
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
            </div>

            <div>
                <label>Repetir senha { !!errors.password && <span> - {errors.password?.message as string}</span>}</label>
                <div>
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
            </div>

            <Button className="buttonSubmit" size="buttonSizeLogin" color="buttonColorBlueLogin" type="submit">Alterar senha</Button>
        </Container>
    )
}

export { FormNewPassword }
