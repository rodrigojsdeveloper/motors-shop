import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 412px;
  height: 542px;

  background-color: var(--grey10);
  border-radius: var(--border-radius);

  padding: 44px 48px;

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    text-align: start;
    line-height: 30px;
  }

  & > a,
  & > small {
    color: var(--grey2);
    font-weight: 500;
    font-size: 14px;
  }

  & > .resetPassword {
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

  & > .buttonSignUp {
    width: 100%;
    max-width: 315px;
    height: 48px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
        
    color: var(--grey0);
    border: 2px solid var(--grey4);
    background-color: var(--grey10);
    border-radius: var(--border-radius);
    
    transition: 0.5s;
    padding: 12px 28px;
  }

  @media (max-width: 425px) {
    padding: 44px 28px;

    & > div:nth-child(2),
    & > div:nth-child(3),
    & > button {
      max-width: unset;

      & > input {
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
    }

    & > a,
    & > small {
      font-size: 12px;
    }

    & > a:nth-last-child(1) {
      font-size: 14px;
    }
  }
`;

export { Container };
