import styled from "styled-components"


const Container = styled.form`

    width: 100%;
    max-width: 412px;
    height: 542px;

    background-color: #FDFDFD;
    border-radius: 4px;

    padding: 44px 48px;

    & > h2 {

        font-weight: 500;
        font-size: 24px;

        text-align: start;
    }

    & > div {

        margin-top: 15px;
    
        & > label {
        
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;

        padding-top: 50px;
        
            span {
                color: #c20707;
            }
        }

        .inputPassword {
            
            display: flex;
            flex-direction: row;
            align-items: center;

            width: 100%;
            max-width: 315px;
            height: 48px;

            padding: 8px 15px;

            border: 2px solid #E9ECEF;
            border-radius: 4px;

            font-weight: 400;
            font-size: 16px;

            transition: .5s;

            &:hover {
                border-color: #000;
                
                .biShow {
                        display: block;
                    }
            }

            input {
                width: 100%;
                height: 100%;

                border: none;
                background: transparent;

                &::placeholder {
                    color: #868E96;
                    font-size: 16px;
                }

                &:focus::-webkit-input-placeholder {
                    color: transparent;
                }
            }

            .biShow {

                color: #868E96;
                cursor: pointer;
                display: none;

                :hover {
                    color: #000;
                    transition: 1s;
                }
            }
        }
    }

    & > p, & > a {

        color: #495057;
        font-weight: 500;
        font-size: 14px;
    }

    & > a {

        display: flex;
        justify-content: flex-end;
        cursor: pointer;

        padding: 20px 0;

        :hover {
            text-decoration: underline;
        }
    }

    & > p {

        text-align: center;
        padding: 38px 0;
    }

    @media (max-width: 425px) {
        padding: 44px 28px;

        & > div {
            
            & > input {
                max-width: unset;
            }

            .inputPassword {
                max-width: unset;
            }
        }

        & > button {
            max-width: unset;
        }
    }
`

export { Container }
