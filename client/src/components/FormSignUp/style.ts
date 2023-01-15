import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 411px;

  padding: 44px 48px;
  background: #fdfdfd;
  border-radius: 4px;

  margin: 90px 0;

  & > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;

    padding-bottom: 10px;
  }

  & > h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    padding: 20px 0 15px 0;
  }

  .divInputs {
    width: 100%;
    max-width: 315px;

    display: flex;
    flex-direction: row;
    align-items: center;

    & > div:nth-child(1),
    & > button:nth-child(1) {
      margin-right: 5px;
    }

    .inputComplement {
      width: 100%;
      max-width: 155.5px;

      input {
        max-width: 155.5px;
      }
    }
  }

  .labelPassword {
    text-align: left;
    padding-top: 20px;

    font-size: 14px;
    font-weight: 500;
    line-height: 25px;

    span {
      color: #c20707;
    }
  }

  .divInputPassword {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 315px;
    height: 48px;
    margin-right: 10px;
    align-items: center;

    border: 2px solid #e9ecef;
    border-radius: 4px;

    padding-right: 15px;

    transition: 0.5s;

    &:hover {
      border-color: #000;
      .biShow {
        display: block;
      }
    }
    input {
      height: 100%;

      padding: 15px;
      width: 100%;
      border: none;
      background-color: transparent;

      font-weight: 400;
      font-size: 16px;
      &:focus::-webkit-input-placeholder {
        color: transparent;
      }

      &:focus::-moz-placeholder {
        color: transparent;
      }

      &::placeholder {
        color: #868e96;
      }
    }
    .biShow {
      color: #868e96;
      display: none;
      &:hover {
        cursor: pointer;

        color: #000;
        transition: 1s;
      }
    }
  }

  .buttonSubmit {
    margin-top: 30px;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div {
      input {
        max-width: unset;
      }
    }

    .divInputs {
      max-width: unset;
      width: 100%;
      flex-direction: column;
      justify-content: unset;
      align-items: unset;

      & > div:nth-child(1) {
        margin-right: 0;
      }

      .inputComplement {
        max-width: unset;
        input {
          max-width: unset;
        }
      }

      .changeButton {
        margin-top: 10px;
        max-width: unset;
      }
    }

    .divInputPassword {
      max-width: unset;
    }

    button {
      max-width: unset;
    }
  }

  @media (max-width: 265px) {
    & > h2 {
      font-size: 20px;
    }

    h3,
    button {
      font-size: 13px;
    }

    label,
    input,
    textarea {
      font-size: 12px;
    }

    .divInputPassword {
      input {
        font-size: 12px;
      }
    }
  }
`;

export { Container };
