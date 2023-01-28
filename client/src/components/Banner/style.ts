import styled from "styled-components";

const Container = styled.div`
  height: 581px;
  background-color: var(--brand2);

  margin-top: 80px;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 261px;

    & > h1 {
      font-weight: 700;
      font-size: 44px;
      line-height: 56px;

      width: 100%;
      max-width: 748px;
      text-align: center;

      color: var(--grey10);

      @media (max-width: 768px) {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
      }
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey9);

      text-align: center;
    }

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      max-width: 381.04px;

      & > a {
        height: 48px;
        max-width: 182.51px;
        width: 100%;

        border-radius: 4px;
        transition: 0.5s;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1.5px solid var(--grey10);
        background-color: transparent;
        padding: 12px 28px;

        font-weight: 600;
        font-size: 16px;
        color: var(--grey10);

        :disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        :hover {
          background-color: var(--grey10);
          color: var(--brand2);
        }
      }

      @media (max-width: 425px) {
        width: 100%;
        height: 117px;
        flex-direction: column;
        justify-content: space-between;

        a {
          width: 100%;
          max-width: unset;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 623px;

    & > div {
      height: 396px;
    }
  }
`;

export { Container };
