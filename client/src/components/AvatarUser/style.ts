import styled from "styled-components";

const colors = [ "#000", "purple", "#8257e5" ]

const Container = styled.div`

    width: 32px;
    height: 32px;
    border-radius: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${ colors[Math.floor(Math.random() * colors.length)] };

    & > p {
        font-weight: 700;
        font-size: 14px;
        
        color: #FFFFFF;
    }
`

export { Container }
