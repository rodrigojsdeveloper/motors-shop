import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 1240px;
    height: 406px;

    background-color: #FFF;
    padding: 44px;

    & > div {

        display: flex;
        flex-direction: row;
        padding: 20px 0;

        & > h2 {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #212529;

            margin-right: 10px;
        }

        & > p {
            background: #EDEAFD;
            border-radius: 4px;
            padding: 4px 8px;

            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #4529E6;
        }
    }

    & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #495057;

        padding-bottom: 20px;
    }
`

export { Container }
