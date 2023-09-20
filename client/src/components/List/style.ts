import styled from "styled-components";

const Container = styled.menu`
  width: 100%;

  padding: 62.5px 20px;

  & > menu {
    width: 100%;
    max-width: 1280px;

    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 312px));
    grid-gap: 30px;

    margin: 0 auto;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0px, 312px));
      grid-gap: 20px;
    }

    @media (max-width: 768px) {
      max-width: 607px;

      grid-template-columns: repeat(2, minmax(0px, 312px));
      grid-gap: 10px;
    }

    @media (max-width: 550px) {
      max-width: 312px;

      grid-template-columns: repeat(1, minmax(0px, 312px));
    }
  }
`;

export { Container };
