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

const FormNewPassword = () => {

    const [ typeInput, setTypeInput ] = useState<boolean>(false);

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true);

    const [ typeInputRepeatPassword, setTypeInputRepeatPassword ] = useState<boolean>(false);

    const [ showOutlineShowRepeatPassword, setShowOutlineShowRepeatPassword ] = useState<boolean>(true);

    const schema = yup.object().shape({

        password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters"),
        repeat_password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters").oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: object) => console.log(data)

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>

            <h2>Nova Senha</h2>

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
