import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 752px;
  height: 239.39px;
  
  padding: 28px 44px;
  background: var(--grey10);
  border-radius: 4px;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > p:nth-child(1) {
        margin-right: 5px;
      }

      & > p {
        height: 32px;

        padding: 4px 8px;
        background: var(--brand4);
        border-radius: 4px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);
      }
    }

    & > span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: var(--grey1);
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
    padding: 30px;
    height: unset;

    & > h3 {
      margin-bottom: 20px;
    }

    & > div {
      flex-direction: column;
      align-items: unset;
      margin-bottom: 15px;

      & > div {
        padding-bottom: 20px;
        justify-content: flex-start;
      }
    }
  }
`;

export { Container };
