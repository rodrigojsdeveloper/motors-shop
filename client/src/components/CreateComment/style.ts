import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 751px;

  background-color: var(--grey10);
  border-radius: var(--border-radius);

  padding: 40px 30px;
  margin-top: 35px;

  & > form {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;

    width: 100%;
    height: 128px;

    border: 2px solid var(--grey7);
    border-radius: var(--border-radius);

    padding: 10px;
    transition: 0.5s;

    &:hover {
      border-color: var(--brand2);
    }

    & > textarea {
      padding: 2px;

      width: 100%;
      height: 100%;

      background-color: var(--transparent);

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
        color: var(--transparent);
      }
    }

    & > button {
      font-weight: 600;
      font-size: 14px;
      max-width: 120px;
    }

    @media (max-width: 768px) {
      height: 185px;
      border: none;

      flex-direction: column;
      align-items: flex-start;
      padding: 0;

      & > textarea {
        width: 100%;
        height: 128px;

        border: 2px solid var(--grey7);
        border-radius: var(--border-radius);

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
          color: var(--transparent);
        }

        &:focus::-moz-placeholder {
          color: var(--transparent);
        }
      }
    }
  }

  & > div:nth-child(1) {
    padding-top: 0;
  }

  @media (max-width: 1440px) {
    margin: 35px auto 50px auto;
  }
`;

export { Container };
