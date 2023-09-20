import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 35px auto 0 auto;

  & > button {
    padding: 8px;
    transition: 0.5s all;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--border-radius);
    background-color: var(--transparent);

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }

    &:hover {
      background-color: var(--shadow-hover-modal);
    }

    &:disabled:hover {
      background-color: var(--transparent);
    }

    &:active {
      background-color: var(--shadow-active-modal);
    }
  }
`;

export { Container };
