import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  & > p {
    text-align: center;
    font-size: 25px;
    color: var(--grey3);
    font-weight: bold;
    padding: 0 20px;
  }

  @media (max-width: 425px) {
    & > p {
      font-size: 18px;
    }
  }
`;

export { Container };
