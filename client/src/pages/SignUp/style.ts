import styled from "styled-components";

const Container = styled.div`
  & > main {
    width: 100%;

    background-color: var(--grey8);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
    margin-top: 20px;
  }
`;

export { Container };
