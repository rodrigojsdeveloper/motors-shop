import styled from "styled-components";

const Container = styled.img`
  width: 100%;
  max-width: 312px;
  height: 152px;
  background-color: var(--grey7);
  object-fit: contain;
  mix-blend-mode: multiply;

  &:hover {
    border: 2px solid var(--brand1);
    cursor: pointer;
  }
`;

export { Container };
