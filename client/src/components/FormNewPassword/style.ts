import styled from "styled-components";

const Container = styled.form`

    width: 100%;
    max-width: 412px;

    background-color: #FDFDFD;
    border-radius: 4px;

    padding: 44px 50px;

    & > h2 {

        font-weight: 500;
        font-size: 22px;
    }

    & > div {

        margin: 30px 0;

        & > label {
            text-align: left;
            padding-top: 20px;

            font-size: 14px;
            font-weight: 500;
            line-height: 25px;

            span {
                color: #c20707;
            }
        }
    

        & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            width: 100%;
            max-width: 315px;
            height: 48px;
            margin-right: 10px;
            align-items: center;

            border: 2px solid #e9ecef;
            border-radius: 4px;

            padding-right: 15px;

            transition: 0.5s;

            &:hover {
                border-color: #000;
                .biShow {
                    display: block;
                }
            }
        
            input {
                height: 100%;

                padding: 15px;
                width: 100%;
                border: none;
                background-color: transparent;

                font-weight: 400;
                font-size: 16px;
                &:focus::-webkit-input-placeholder {
                    color: transparent;
                }

                &::placeholder {
                    color: #868e96;
                }
            }

            .biShow {
                color: #868e96;
                display: none;
                &:hover {
                    cursor: pointer;

                    color: #000;
                    transition: 1s;
                }
            }
        }
    }

    @media (max-width: 375px) {

        padding-left: 25px;
        padding-right: 25px;
    }
`

export { Container }
