import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 411px;

  padding: 44px 48px;
  background-color: var(--grey10);
  border-radius: var(--border-radius);

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

    padding: 20px 0;
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
