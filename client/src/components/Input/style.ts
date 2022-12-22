import styled, { css } from "styled-components"
import { InputStyledProps } from "../../interfaces"


const Container = styled.div`

    text-align: left;
    padding-top: 20px;

    label {
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;

        span {
            color: #c20707;
        }
    }
`

const InputContainer = styled.input<InputStyledProps>`

    width: 100%;

    padding: 15px;

    border: 2px solid #E9ECEF;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    transition: .5s;

    &::placeholder {
        color: #868E96;
    }

    &:hover {
        border-color: #000;
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    ${ ({ size }) => {

        switch(size) {

            case "inputSignIn":
                return css`
                    max-width: 315px;
                    height: 48px;
                `
            
            case "inputSignUp":
                return css`
                    max-width: 315px;
                    height: 80px;
                `

            case "inputSignUpSmall":
                return css`
                    max-width: 152px;
                    height: 48px;
                `

            default:
                return false
        }
    } }
`

export { Container, InputContainer }
