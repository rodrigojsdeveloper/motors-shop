import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  height: 350px;
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
  }
  .divKmYearPrice,
  .divKmYearPrice :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .divKmYearPrice {
    justify-content: space-between;
  }

  img {
    :hover {
      border: none;
      cursor: default;
    }
  }

  @media (max-width: 425px) {
    margin-right: 12px;
  }
`;

export { Container };
