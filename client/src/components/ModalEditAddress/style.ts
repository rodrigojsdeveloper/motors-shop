import styled from "styled-components";
import { animationModal } from "../ModalEditUser/style";

const Container = styled.div`

    width: 100%;
    max-width: 520px;
    height: 767px;

    background: #FFFFFF;
    border-radius: 8px;
    padding: 16px 24px;
    animation: ${animationModal} 1s;
    
    & > form {
        width: 100%;

        & > h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #212529;

            padding-bottom: 10px;
        }
        
        & > div:nth-child(2) {
            
            .divInputs {
                width: 100%;
                display: flex;
                flex-direction: row;

                & > div:nth-child(1) {
                    margin-right: 9px;
                }

                .inputNumber {
                    width: 100%;
                    max-width: 228px;
                    margin-right: 9px;
                }

                .inputComplement {
                    width: 100%;
                    max-width: 228px;
                }
            }

            @media (max-width: 425px) {
                height: 510px;
                overflow-y: auto;
            }
        }

        .divButtons {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: end;

            padding-top: 30px;

            & > button:nth-child(1) {
                margin-right: 7px;
            }

            @media (max-width: 425px) {
                padding-top: 20px;
                flex-direction: column;

                & > button:nth-child(1) {
                    margin-right: 0;
                    max-width: unset;
                }

                & > button:nth-child(2) {
                    margin-top: 10px;
                    max-width: unset;
                }
            }
        }
    }
`

export { Container }
