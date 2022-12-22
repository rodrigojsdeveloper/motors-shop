import styled from "styled-components"

const Container = styled.div`

    .divBlue {
        height: 650px;
        background: #4529E6;
    }

    .divWhite {
        height: 1350px;
        background: #E9ECEF;

        display: flex;
        flex-direction: column;
        align-items: center;

        & > div {
            width: 100%;
            max-width: 1238px;
        }
    }
`

export { Container }
