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
    color: #212529;

    font-weight: bold;
  }

  & > img {
    cursor: pointer;

    :hover {
      padding: 2.5px;

      border-radius: 8px;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;

export { Container };
