import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 751px;
  height: 289px;

  background-color: var(--grey10);
  border-radius: 4px;

  padding: 40px 30px 40px 48px;
  margin-top: 35px;

  & > form {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;

    width: 100%;
    max-width: 672px;
    height: 128px;

    border: 2px solid var(--grey7);
    border-radius: 4px;

    padding: 10px;
    transition: 0.5s;

    &:hover {
      border-color: var(--brand2);
    }

    & > textarea {
      padding-top: 10px;

      height: 100%;
      width: 80%;

      border: none;
      resize: none;

      background: transparent;

      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;
        color: var(--grey3);

        padding: 10px 10px 0 0;
      }

      &:focus {
        caret-color: var(--brand2);
      }

      &:focus::-webkit-input-placeholder {
        color: transparent;
      }
    }

    & > button {
      font-weight: 600;
      font-size: 14px;
      max-width: 120px;
    }

    @media (max-width: 768px) {
      border: none;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      height: 185px;

      & > textarea {
        border: 2px solid var(--grey7);
        border-radius: 4px;

        width: 100%;
        height: 128px;

        margin-bottom: 20px;
        padding: 15px 0 15px 15px;

        &::placeholder {
          font-weight: 400;
          font-size: 16px;
          line-height: 0px;
          color: var(--grey3);

          padding: 10px 10px 0 0;
        }

        &:focus {
          background-color: var(--white-fixed);
          border-color: var(--brand2);
          caret-color: var(--brand2);
        }

        &:focus::-webkit-input-placeholder {
          color: transparent;
        }

        &:focus::-moz-placeholder {
          color: transparent;
        }
      }
    }
  }

  & > div:nth-child(1) {
    padding-top: 0;
  }

  & > div:nth-child(3) {
    width: 401px;
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > p {
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: var(--grey3);

      background-color: var(--grey7);
      border-radius: 24px;

      cursor: pointer;
      padding: 0px 12px;
      transition: 0.5s;

      &:hover {
        color: var(--black-fixed);
      }
    }

    @media (max-width: 768px) {
      height: 110px;
      width: 100%;
      max-width: 218px;

      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  @media (max-width: 1440px) {
    margin: 35px auto 50px auto;
  }

  @media (max-width: 768px) {
    padding: 30px;
    height: 414px;
  }
`;

export { Container };
