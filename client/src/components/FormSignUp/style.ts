import styled from "styled-components"

const Container = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 411px;

    padding: 44px 48px;
    background: #FDFDFD;
    border-radius: 4px;

    margin: 90px 0;

    & > h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;

        padding-bottom: 10px;
    }

    & > h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        padding: 15px 0;
    }
    
    .divInputs {

        width: 100%;
        max-width: 315px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .inputNumber {
            width: 100%;
            max-width: 152px;
        }

        .inputComplement {
            width: 100%;
            max-width: 152px;
        }

        @media (max-width: 450px) {

            flex-direction: column;
            justify-content: unset;
            align-items: unset;
            
            .changeInput {
                display: flex;
                flex-direction: column;
                
                & > input {
                    max-width: 315px;
                }
            }

            .inputNumber, .inputComplement {
                max-width: 315px;
                
                & > input {
                    max-width: 315px;
                }
            }

            .changeButton {
                max-width: 315px;
                margin-top: 10px;
            }
        }
    }

    .buttonSubmit {
        margin-top: 30px;
    }

    @media (max-width: 320px) {

        padding: 44px 30px;
    }
`

export { Container }
