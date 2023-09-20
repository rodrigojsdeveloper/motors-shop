import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  text-align: left;
  padding-top: 20px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
  }

  & > select {
    width: 100%;
    height: 48px;

    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey3);

    border: 2px solid var(--grey7);
    border-radius: var(--border-radius);
    background-color: var(--transparent);

    padding: 15px;
    transition: 0.5s;

    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M12 1L6.5 7L1 1" stroke="%23868E96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-position: 0;
    background-position-x: 95%;

    &:hover {
      background-color: var(--grey8);
    }

    &:focus {
      caret-color: var(--brand2);
      border-color: var(--brand2);
      background-color: var(--white-fixed);

      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M12 1L6.5 7L1 1" stroke="%235126EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
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
