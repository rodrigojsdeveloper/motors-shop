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
    line-height: 30px;
  }

  & > a,
  & > small {
    font-weight: 500;
    font-size: 14px;

    color: var(--grey2);
  }

  & > .resetPassword {
    width: fit-content;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    float: right;

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

    & > button,
    .buttonSignUp {
      max-width: unset;
    }
  }
`;

export { Container };
