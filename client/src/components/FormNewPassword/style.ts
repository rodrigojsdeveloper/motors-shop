import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 412px;

  background-color: var(--grey10);
  border-radius: 4px;

  padding: 44px 50px;

  & > h2 {
    font-weight: 500;
    font-size: 22px;
  }

  & > div:nth-child(2) {
    margin-top: 20px;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    margin: 25px 0;

    & > label {
      text-align: left;
      padding-top: 20px;

      font-size: 14px;
      font-weight: 500;
      line-height: 25px;

      span {
        color: var(--alert1);
      }
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      max-width: 315px;
      height: 48px;
      margin-right: 10px;
      align-items: center;

      border: 2px solid var(--grey7);
      border-radius: 4px;

      padding-right: 15px;

      transition: 0.5s;

      &:hover {
        border-color: var(--black-fixed);
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
          color: var(--grey3);
        }
      }

      .biShow {
        color: var(--grey3);
        display: none;
        &:hover {
          cursor: pointer;

          color: var(--black-fixed);
          transition: 1s;
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > input {
        max-width: unset;
      }

      & > div {
        max-width: unset;
      }
    }

    & > button {
      max-width: unset;
    }
  }

  @media (max-width: 265px) {
    & > h2 {
      font-size: 20px;
    }

    & > div {
      & > div {
        & > label {
          font-size: 12px;
        }
        & > input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
    }

    & > button {
      font-size: 14px;
    }
  }
`;

export { Container };
