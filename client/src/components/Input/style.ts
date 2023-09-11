import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;

  text-align: left;
  padding-top: 20px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;

    & > span {
      color: var(--alert1);
    }
  }

  & > input {
    width: 100%;
    height: 48px;

    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    border: 2px solid var(--grey7);
    border-radius: var(--border-radius);
    background-color: var(--transparent);

    padding: 15px;
    transition: 0.5s;

    &:hover {
      background-color: var(--grey8);
    }

    &::placeholder {
      color: var(--grey3);
    }

    &:focus {
      background-color: var(--white-fixed);
      border-color: var(--brand2);
      caret-color: var(--brand2);
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
