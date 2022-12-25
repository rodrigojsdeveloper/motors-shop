import styled from "styled-components";

const Container = styled.div`

    width: 751px;
    height: 214px;

    background: #FDFDFD;
    border-radius: 4px;

    & > div {
        display: flex;
        flex-direction: row;

        & > img {
            width: 32px;
            height: 32px;
            border-radius: 150px;
        
            object-fit: cover;
        }

        & > h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;

            color: #212529;
        }

        & > button {
            margin-left: 10px;
        }
    }
`

export { Container }
