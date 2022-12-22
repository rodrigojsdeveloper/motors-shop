import styled from "styled-components";

const Container = styled.div`
    
    padding: 100px 0;

    & > h2 {
        margin-left: 20px;
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

    @media (max-width: 768px) {

        & > h2 {
            margin-left: 8px;
        }

        & > menu {
            height: 497px;
        }
    }
`

export { Container }
