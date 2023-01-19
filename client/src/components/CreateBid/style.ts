import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 751px;
  height: 214px;

  background: var(--grey10);
  border-radius: 4px;

  padding: 15px 15px 15px 40px;
  margin-top: 20px;

  display: flex;
  align-items: center;

  & > div {
    width: 100%;

    .divUser {
      display: flex;
      flex-direction: row;
      align-items: center;

      & > h3 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: var(--grey1);
        margin-left: 10px;
      }
    }

    & > form {
      width: 100%;
      display: flex;
      align-items: flex-end;

      & > button {
        margin-left: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        padding-left: 0;
        padding-right: 0;
      }

      @media (max-width: 475px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        & > button {
          margin-left: 0;
          margin-top: 10px;
          max-width: unset;
        }

        & > div {
          max-width: unset;
          width: 100%;

          & > input {
            max-width: unset;
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    margin: 0 auto 40px auto;
  }

  @media (max-width: 475px) {
    height: auto;

    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
  }
`;

export { Container };
