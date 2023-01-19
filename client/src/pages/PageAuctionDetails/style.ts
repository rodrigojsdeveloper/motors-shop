import styled from "styled-components";

const Container = styled.div`
  .divBlue {
    height: 650px;
    background-color: var(--brand1);
  }

  .divWhite {
    height: 1350px;
    background-color: var(--grey7);

    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      width: 100%;
      max-width: 1238px;

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
