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

  & > img {
    cursor: pointer;
  }
`;

export { Container };
