import styled from "styled-components";

const Container = styled.div`
  .divBlue {
    height: 350px;
    background-color: var(--brand1);
    margin-top: 80px;

    @media (max-width: 425px) {
      height: 251px;
    }
  }

  .divWhite {
    background-color: var(--grey8);

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
