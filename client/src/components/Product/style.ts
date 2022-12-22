import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 312px;
    margin: 10px 20px;

    & > img  {
        width: 312px;
        height: 152px;
        background: #E9ECEF;
        border: 2px solid #E9ECEF;
    }

    & > h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #212529;
      
        padding: 10px 0 15px 0;
    }

    & > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #495057;

        padding-bottom: 10px;
    }

    & > div {

        display: flex;
        flex-direction: row;
        align-items: center;

        padding-bottom: 10px;

        img {
            width: 32px;
            height: 32px;
            border-radius: 150px;

            background-color: #5126EA;
        }

        h6 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #495057;
            margin-left: 8px;
        }

        div {

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 100%;
            max-width: 113px;

            p {
                background: #EDEAFD;
                border-radius: 4px;
                padding: 4px 8px;
                width: 51px;
                height: 32px;

                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: #4529E6;
            }
        }

        span {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #212529;
        }
    }

    .divKmYearPrice {
        justify-content: space-between;
    }
`

export { Container }
