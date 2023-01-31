import styled from "styled-components";

const Container = styled.div`
  .divBlue {
    height: 650px;
    background-color: var(--brand1);
  }

  .divWhite {
    background-color: var(--grey7);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 80px;
    
    & > div {
      width: 100%;
      max-width: 1250px;

      padding: 10px;
    }
  }
`;

export { Container };
