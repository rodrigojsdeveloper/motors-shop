import styled from "styled-components";

const Container = styled.div`
  & > main {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
    margin-top: 50px;

    background-color: var(--grey8);
  }
`;

export { Container };
