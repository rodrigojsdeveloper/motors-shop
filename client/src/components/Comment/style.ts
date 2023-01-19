import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 663px;

  margin-bottom: 15px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    width: 100%;
    padding-bottom: 10px;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & > h5 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: var(--grey1);
        margin-left: 10px;
      }
    }

    & > hr {
      width: 4px;
      height: 4px;
      border-radius: 50%;

      background: var(--grey4);

      margin: 0 12px 0 8px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      color: var(--grey3);
    }
  }

  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    line-height: 1.2rem;
  }
`;

export { Container };
