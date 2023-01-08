import styled from "styled-components"


const Container = styled.div`

    & > div {

        width: 100%;
        margin-top: 50px;

        height: 790px;
        background-color: #F1F3F5;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 15px;
    }

    @media (min-width: 1921px) {

        & > div {
            height: 100vh;
        }
    }

    @media (max-width: 425px) {
        
        & > div {
            margin-top: 10px;
        }
    }
`

export { Container }
