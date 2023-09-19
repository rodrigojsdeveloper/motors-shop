import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 80px;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--shadow8);

  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export { Container };
