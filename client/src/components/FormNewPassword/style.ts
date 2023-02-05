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

  & > div {
    padding-bottom: 20px;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div {
      max-width: unset;
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
