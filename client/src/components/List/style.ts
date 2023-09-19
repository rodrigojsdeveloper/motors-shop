import styled from "styled-components";

const Container = styled.menu`
  width: 100%;

  padding: 62.5px 20px;

  & > menu {
    width: 100%;
    max-width: 1440px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 40px;
    margin: 0 auto;
  }
`;

export { Container };
