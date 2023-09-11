import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0 100px 50px;

  & > menu {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 1024px) {
    padding-left: 25px;
  }
`;

export { Container };
