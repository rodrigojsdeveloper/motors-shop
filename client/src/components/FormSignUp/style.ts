import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 411px;

  background-color: var(--grey10);
  border-radius: var(--border-radius);

  padding: 44px 48px;

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

  .divAccountType {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button:nth-child(1) {
      margin-right: 11px;
    }
  }

  .buttonSubmit {
    margin-top: 30px;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    .divAccountType {
      flex-direction: column;

      & > button:nth-child(1) {
        margin-right: unset;
        margin-bottom: 11px;
      }

      & > button {
        max-width: unset;
      }
    }

    & > button {
      max-width: unset;
    }
  }
`;

export { Container };
