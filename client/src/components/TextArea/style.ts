import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;

    & > span {
      color: var(--alert1);
    }
  }

  & > textarea {
    background-color: var(--transparent);
    width: 100%;

    padding: 15px;

    border: 2px solid var(--grey7);
    border-radius: var(--border-radius);

    font-weight: 400;
    font-size: 16px;

    transition: 0.5s;
    height: 80px;

    &::placeholder {
      color: var(--grey3);
    }

    &:hover {
      background-color: var(--grey8);
    }

    &:focus {
      border-color: var(--brand2);
      background-color: var(--white-fixed);
    }

    &:focus::-webkit-input-placeholder {
      color: var(--transparent);
    }

    &:focus::-moz-placeholder {
      color: var(--transparent);
    }
  }
`;

export { Container };
