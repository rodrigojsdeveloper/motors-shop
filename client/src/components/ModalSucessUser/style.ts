import styled from "styled-components";
import { animationModal } from "../ModalEditUser/style";

const Container = styled.div`

    width: 100%;
    max-width: 520px;
    height: 287px;
    
    background: #FFFFFF;
    border-radius: 8px;
    animation: ${animationModal} 1s;
    padding: 16px 24px;

    & > div {
        text-align: start;

        & > h5 {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #212529;
            
            padding-bottom: 30px;
            font-weight: bold;
        }

        & > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: #495057;
            
            width: 100%;
            max-width: 462px;
            padding-bottom: 15px;
        }

        & > button {
            padding: 12px 20px;
            font-weight: 600;
            font-size: 12px;
        }
    }

    @media (max-width: 425px) {
        
        & > div {

            & > h5, & > p {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 320px) {

        & > div {
            padding-top: 20px;

            & > h5 {
                padding-bottom: 15px;
            }
        }
    }
`

export { Container }
