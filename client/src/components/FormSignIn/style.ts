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
        margin-bottom: 8px;
    }

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

    & > p, & > h3 {

        color: #495057;
        font-weight: 500;
        font-size: 14px;
    }

    & > h3 {

        text-align: right;
        padding: 10px 0 23px 0;
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
    }

    & > p {

        text-align: center;
        padding: 38px 0;
    }

    @media (max-width: 375px) {

        padding-left: 20px;
        padding-right: 20px;
    }
`

export { Container }
