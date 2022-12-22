import styled from "styled-components"


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

const InputContainer = styled.input`

    width: 100%;
    max-width: 315px;
    height: 48px;

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
`

export { Container, InputContainer }
