import styled from "styled-components";

const Container = styled.div`

    display: flex;
    justify-content: center;

    padding: 80px;

    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        padding-right: 40px;
        padding-left: 40px;    
    }

    @media (max-width: 375px) {
        padding-right: 20px;
        padding-left: 20px;
    }
`

export { Container }
