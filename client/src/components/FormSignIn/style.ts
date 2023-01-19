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

  & > a:nth-last-child(1) {
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;

    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.5s;
    height: 48px;
    max-width: 315px;
    width: 100%;
    background-color: #fdfdfd;
    border: 2px solid #adb5bd;

    color: #0b0d0d;
    padding: 12px 28px;

    font-weight: 600;
    font-size: 16px;
    text-decoration: none;

    :hover {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(-1px);
    }
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
