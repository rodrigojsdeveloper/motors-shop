import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 663px;
    height: 116px;

    margin-bottom: 15px;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;

        width: 100%;

        & > div {

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            & > img {

                width: 32px;
                height: 32px;
                border-radius: 50%;

                object-fit: contain;
            }

            & > h5 {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;

                color: #212529;
                margin-left: 12px;
            }
        }

        & > hr {
            width: 4px;
            height: 4px;
            border-radius: 50%;

            background: #ADB5BD;

            margin: 0 12px 0 8px;
        }

        & > p {
            font-weight: 400;
            font-size: 12px;
            line-height: 24px;

            color: #868E96;
        }
    }

    & > span {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #495057;
    }
`

export { Container }
