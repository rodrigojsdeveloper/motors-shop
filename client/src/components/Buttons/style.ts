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
      background-color: var(--shadow-hover-button-exit);
    }

    &:disabled:hover {
      background-color: var(--transparent);
    }

    &:active {
      background-color: var(--shadow-active-button-exit);
    }
  }
`;

export { Container };
