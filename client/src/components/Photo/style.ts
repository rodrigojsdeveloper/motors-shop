import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 752px;
  height: 355px;

  background-color: var(--grey10);
  border-radius: var(--border-radius);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  & > img {
    width: 100%;
    max-width: 441px;
    height: 252.96px;

    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export { Container };
