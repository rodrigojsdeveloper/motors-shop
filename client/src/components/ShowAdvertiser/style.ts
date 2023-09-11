import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 1240px;

  background-color: var(--grey10);
  border-radius: var(--border-radius);

  padding: 36px 44px;
  margin: -210px auto 0 auto;

  & > div:nth-child(1) {
    & > div {
      width: 104px;
      height: 104px;

      & > p {
        font-size: 36px;
      }
    }
    & > h5 {
      display: none;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;

    & > h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);

      margin-right: 15px;
    }

    & > p {
      padding: 4px 8px;

      background-color: var(--brand4);
      border-radius: var(--border-radius);

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--brand1);
    }
  }

  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);

    margin-bottom: 50px;
  }

  & > button {
    padding: 0;
  }

  @media (max-width: 720px) {
    padding: 30px;
  }

  @media (max-width: 425px) {
    margin-top: -182.5px;
  }

  @media (max-width: 375px) {
    & > div:nth-child(2) {
      flex-direction: column;
      align-items: unset;

      & > p {
        width: fit-content;
        margin-top: 10px;
      }
    }
  }
`;

export { Container };
