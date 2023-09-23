import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;

  & > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    margin-left: 10px;
  }
`;

const Content = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-50);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  & > p {
    font-weight: 500;
    font-size: 14px;
    color: var(--white-fixed);
  }
`;

export { Container, Content };
