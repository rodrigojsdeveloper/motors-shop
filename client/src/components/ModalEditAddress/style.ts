import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 520px;
    height: 767px;

    background: #FFFFFF;
    border-radius: 8px;
    padding: 16px 24px;

    & > header {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: 56px;
        width: 100%;
        max-width: 520px;

        background: #FFFFFF;
        padding-bottom: 24px;

        & > h2 {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #212529;

            font-weight: bold;
        }

        & > img {
            cursor: pointer;

            :hover {
                padding: 2.5px;

                border-radius: 8px;
                border-color: rgba(0, 0, 0, 0.15);
                box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                color: rgba(0, 0, 0, 0.65);
            }
        }
    }
    
    & > form {
        width: 100%;

        & > h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #212529;
        }
        
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

        .divButtons {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: end;

            padding-top: 30px;

            & > button:nth-child(1) {
                margin-right: 7px;
            }

            @media (max-width: 375px) {
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

    @media (max-width: 375px) {
        height: 805px;
    }
`

export { Container }
