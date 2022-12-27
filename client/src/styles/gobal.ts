import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lexend', sans-serif;
    }
    body {
        background: #fff;
        color: #000;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    input[type=number] {
        -moz-appearance:textfield;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
