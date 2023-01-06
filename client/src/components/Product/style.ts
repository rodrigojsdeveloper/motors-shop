import styled from "styled-components";

const Container = styled.div`
    
    width: 312px;
    margin-right: 40px;

    & > img  {
        width: 312px;
        height: 152px;
        background: #E9ECEF;
        object-fit: contain;
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
        line-height: 1.2rem;
        
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; 

        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > div {

        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 10px 0;

        h6 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #495057;
            margin-left: 8px;
        }
    }

    span {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #212529;
    }

    .divKmYearPrice {

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        p {
            background: #EDEAFD;
            border-radius: 4px;
            padding: 4px 8px;
            height: 32px;

            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #4529E6;

            margin-right: 5px;
        }
    }

    @media (max-width: 375px) {

        margin-right: 15px;
    }
`

export { Container }
