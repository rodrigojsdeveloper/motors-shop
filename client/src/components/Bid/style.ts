import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 663px;
  height: 116px;

  margin: 10px 0 15px 0;

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

      & > h3 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: var(--grey1);
        margin-left: 7px;
      }
    }

    & > hr {
      width: 4px;
      height: 4px;
      border-radius: 50%;

      background-color: var(--grey4);

      margin: 0 12px 0 8px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      color: var(--grey3);
    }
  }

  & > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
  }

  & > button {
    margin-top: 20px;
  }
`;

export { Container };
