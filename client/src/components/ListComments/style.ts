import styled from "styled-components"

const Container = styled.div`

    padding: 36px 44px;
    
    width: 100%;
    max-width: 751px;
    height: 557px;

    background: #FDFDFD;
    border-radius: 4px;

    margin-top: 15px;

    & > h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        color: #212529;
        padding-bottom: 18px;
    }

    & > menu {
        display: flex;
        flex-direction: column;
        
        width: 100%;
        max-width: 663px;

        height: 436px;
        overflow-y: auto;
    }

    @media (max-width: 1440px) {

        margin: 20px auto 0 auto;
    }

    @media (max-width: 720px) {

        padding: 30px;
    }
`

export { Container }
