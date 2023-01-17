import styled from "styled-components";

const Container = styled.div`
  .divBlue {
    height: 650px;
    background: #4529e6;
  }

  .divWhite {
    height: 1350px;
    background: #e9ecef;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      width: 100%;
      max-width: 1250px;

      padding: 10px;
    }
  }

  @media (max-width: 1440px) {
    .divWhite {
      height: auto;
    }
  }
`;

export { Container };
