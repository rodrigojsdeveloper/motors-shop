import styled from "styled-components";

const Container = styled.div`
    
    padding: 100px 0;

    & > h2 {
        margin-left: 30px;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;

        padding-bottom: 40px;
    }

    & > menu {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }

    @media (max-width: 375px) {

        & > h2 {
            margin-left: 10px;
        }
    }
`

export { Container }
