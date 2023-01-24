import styled from "styled-components";

const Container = styled.div`
  & > main {
    width: 100%;
    height: 790px;

    background-color: var(--grey8);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
    margin-top: 50px;
  }

  @media (min-width: 1921px) {
    & > main {
      height: 100vh;
    }
  }

  @media (max-width: 425px) {
    & > main {
      margin-top: 10px;
    }
  }

  @media (min-height: 1050px) {
    & > main {
      height: 100vh;
    }
  }
`;

export { Container };
