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
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;

    padding-bottom: 10px;
  }

  & > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    padding: 15px 0;
  }

  .divInputs {
    width: 100%;
    max-width: 315px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .inputNumber {
      width: 100%;
      max-width: 152px;
    }

    .inputComplement {
      width: 100%;
      max-width: 152px;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      justify-content: unset;
      align-items: unset;

      .changeInput {
        display: flex;
        flex-direction: column;

        & > input {
          max-width: 315px;
        }
      }

      .inputNumber,
      .inputComplement {
        max-width: 315px;

        & > input {
          max-width: 315px;
        }
      }

      .changeButton {
        max-width: 315px;
        margin-top: 10px;
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

  @media (max-width: 320px) {
    padding: 44px 30px;
  }
`;

export { Container };
