import styled from "styled-components";

const Container = styled.div`
  .divBlue {
    height: 350px;
    background: #4529e6;
    margin-top: 80px;

    @media (max-width: 425px) {
      height: 251px;
    }
  }

  .divWhite {
    background: #e9ecef;

    & > div {
      width: 100%;
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
