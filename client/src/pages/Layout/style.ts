import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px 10px;
  margin-top: 70px;

  background-color: var(--grey8);

  @media (max-width: 425px) {
    margin-top: 10px;
  }
`;

export { Container };
