import styled from "styled-components"

const Container = styled.div`

    width: 100%;
    max-width: 751px;
    height: 289px;

    background: #FDFDFD;
    border-radius: 4px;

    padding: 44px 48px;
    margin-top: 40px;

    .divUserPhotoAndName {

        display: flex;
        flex-direction: row;
        align-items: center;

        padding-bottom: 10px;

        & > img {
            width: 32px;
            height: 32px;
            border-radius: 150px;
            object-fit: contain;
        }

        & > h4 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;

            color: #212529;
            margin-left: 8px;
        }
    }

    .divInputLarge {

        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;

        width: 100%;
        max-width: 672px;
        height: 128px;
        
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;

        padding: 10px;

        & > textarea {

            padding-top: 10px;

            height: 100%;
            width: 80%;

            border: none;
            resize:none;

            background: transparent;

            &::placeholder {
                font-weight: 400;
                font-size: 16px;
                line-height: 0px;
                color: #868E96;

                padding: 10px 10px 0 0;
            }
        }
    }

    .divReadyComments {

        display: flex;
        flex-direction: row;

        margin-top: 15px;

        & > p {
            color: #868E96;
            font-weight: 500;
            font-size: 12px;
            line-height: 24px;
            
            background: #E9ECEF;
            border-radius: 24px;

            cursor: pointer;

            margin-right: 10px;
            padding: 0px 12px;
        }
    }
`

export { Container }
