import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding-bottom: 24px;
  width: 100%;

  & > h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);

    font-weight: bold;
  }

  & > div {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: all 0.2s ease-in-out 0s;
    border-radius: var(--border-radius-50);

    &:hover {
      background-color: var(--shadow-hover-modal);

      path {
        stroke: var(--grey2);
      }
    }

    &:active {
      background-color: var(--shadow-active-modal);
    }
  }
`;

export { Container };
