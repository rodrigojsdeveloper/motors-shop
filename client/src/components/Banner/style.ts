import styled from "styled-components"


const Container = styled.div`

    height: 581px;
    background-color: #5126EA;

    margin-top: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;

    & > h1 {
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;
        padding-bottom: 20px;
        
        width: 100%;
        max-width: 748px;
        text-align: center;

        color: #FDFDFD;

        @media (max-width: 768px) {

            font-weight: 600;
            font-size: 32px;
            line-height: 40px;

            padding-bottom: 40px;
        }
    }

    & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;

        padding-bottom: 40px;
        text-align: center;

        color: #F8F9FA;
    }

    & > div {
        display: flex;
        flex-direction: row;

        width: 100%;
        max-width: 381.04px;

        a {
            width: 100%;
        }

        button {
            margin: 0 10px;    
        }

        @media (max-width: 425px) {

            flex-direction: column;
            width: 100%;

            button {
                width: 100%;
                max-width: unset;
                margin: 10px 0;
            }
        }
    }

    @media (max-width: 425px) {

        height: 623px;
    }
`

export { Container }
