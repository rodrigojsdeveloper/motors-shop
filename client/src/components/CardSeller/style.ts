import styled from "styled-components";

const Container = styled.aside`
  width: 100%;
  max-width: 440px;
  height: 426px;

  display: flex;
  justify-content: center;

  padding: 34px 24px;
  border-radius: var(--border-radius);

  background-color: var(--white-fixed);

  & > div {
    width: 100%;
    max-width: 352px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > div:nth-child(1) {
      & > div {
        width: 104px;
        height: 104px;
        border-radius: var(--border-radius-50);

        & > p {
          font-weight: 500;
          font-size: 36px;
          line-height: 53px;
        }
      }

      & > h4 {
        display: none;
      }
    }

    & > h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);

      width: 100%;
      height: 84px;
      max-width: 352px;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > a {
      width: 100%;
      height: 48px;
      max-width: 206px;

      font-weight: 600;
      font-size: 16px;
      color: var(--white-fixed);

      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.5s;

      background-color: var(--grey0);
      border: 1.5px solid var(--grey0);
      border-radius: var(--border-radius);

      padding: 12px;

      :disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      :hover {
        background-color: var(--grey1);
        border-color: var(--grey1);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 50px;
  }

  @media (max-width: 1440px) {
    max-width: 752px;
    width: 100%;
  }
`;

export { Container };
