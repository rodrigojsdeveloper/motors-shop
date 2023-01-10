import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 412px;
  height: 542px;

  background-color: #fdfdfd;
  border-radius: 4px;

  padding: 44px 48px;

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    text-align: start;
  }

  & > div:nth-child(2) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  & > div:nth-child(3) {
    & > label {
      font-size: 14px;
      font-weight: 500;
      line-height: 25px;

      & > span {
        color: #c20707;
      }
    }

    .inputPassword {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 100%;
      max-width: 315px;
      height: 48px;

      padding: 8px 15px;

      border: 2px solid #e9ecef;
      border-radius: 4px;

      font-weight: 400;
      font-size: 16px;

      transition: 0.5s;

      &:hover {
        border-color: #000;

        .biShow {
          display: block;
        }
      }

      input {
        width: 100%;
        height: 100%;

        border: none;
        background: transparent;

        &::placeholder {
          color: #868e96;
          font-size: 16px;
        }

        &:focus::-webkit-input-placeholder {
          color: transparent;
        }
      }

      .biShow {
        color: #868e96;
        cursor: pointer;
        display: none;

        :hover {
          color: #000;
          transition: 1s;
        }
      }
    }
  }

  & > a,
  & > small {
    color: #495057;
    font-weight: 500;
    font-size: 14px;
  }

  & > a {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 10px 0 20px 0;

    :hover {
      text-decoration: underline;
    }
  }

  & > small {
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div:nth-child(2),
    & > div:nth-child(3),
    & > button {
      max-width: unset;

      & > input,
      .inputPassword {
        max-width: unset;
      }
    }
  }

  @media (max-width: 265px) {
    & > h2 {
      font-size: 20px;
    }

    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > label {
        font-size: 12px;
      }
      & > input {
        &::placeholder {
          font-size: 12px;
        }
      }
      .inputPassword {
        & > input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
    }

    & > a,
    & > small {
      font-size: 12px;
    }

    & > button {
      font-size: 14px;
    }
  }
`;

export { Container };
