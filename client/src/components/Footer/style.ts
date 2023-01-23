import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 140px;

  background-color: var(--grey0);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 45px 59px;

  & > small {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--white-fixed);
  }
  
  @media (max-width: 1024px) {
    height: 310.34px;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 44px 10px;
  }

  @media (max-width: 265px) {
    & > small {
      font-size: 12px;
    }
  }
`;

export { Container };
