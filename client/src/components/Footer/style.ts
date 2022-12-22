import styled from "styled-components"


const Container = styled.footer`

    width: 100%;
    height: 140px;

    background-color: #0B0D0D;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 45px 59px;

    & > p {
        font-weight: 400;
        font-size: 14px;

        color: #FFFFFF;
    }

    & > a {
        max-width: 53px;
        width: 100%;
    }

    @media (max-width: 1024px) {

        height: 310.34px;
        flex-direction: column;

        & > p {
     
            line-height: 24px;
        }
    }

    @media (max-width: 375px) {

        padding: 44px 10px;

    }
`

export { Container }
