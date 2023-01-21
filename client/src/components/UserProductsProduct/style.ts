import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  margin-right: 40px;

  & > div:nth-child(1) {
    .active,
    .deactive {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--white-fixed);

      margin: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
      position: relative;
      margin-bottom: -32px;
    }

    .active {
      width: 51px;
      height: 24px;
      padding: 0px 8px;
      background-color: var(--brand1);
    }

    .deactive {
      width: 61px;
      height: 24px;
      padding: 0px 8px;
      background-color: var(--grey4);
    }

    & > img {
      width: 312px;
      height: 152px;
      background-color: var(--grey7);
      object-fit: contain;
    }
  }

  & > div:nth-child(2) {
    height: 198px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;

    & > h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
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

      h6 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        margin-left: 8px;
      }
    }

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);
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
        background: var(--brand4);
        border-radius: 4px;
        padding: 4px 8px;
        height: 32px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);

        margin-right: 5px;
      }
    }
  }

  @media (max-width: 375px) {
    margin-right: 15px;
  }
`;

export { Container };
