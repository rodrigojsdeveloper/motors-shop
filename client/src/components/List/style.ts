import styled from "styled-components";

const Container = styled.div`
  padding: 100px 50px;

  & > menu {
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    padding: 50px 25px;
  }
`;

export { Container };
