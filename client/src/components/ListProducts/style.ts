import styled from "styled-components";

const Container = styled.div`
    
    padding: 100px 0px;

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
`

export { Container }
