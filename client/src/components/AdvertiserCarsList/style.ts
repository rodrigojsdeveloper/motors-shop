import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0 100px 50px;

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 40px;
  }

  & > menu {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  @media (max-width: 1024px) {
    padding-left: 25px;
  }

  @media (max-width: 1250px) {

    padding-left: 0;
  }
`;

export { Container };
