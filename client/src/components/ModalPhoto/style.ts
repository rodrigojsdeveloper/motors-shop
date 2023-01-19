import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: 354px;
  background-color: var(--white-fixed);
  border-radius: 8px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${animationModal} 1s;

  & > img {
    width: 100%;
    height: 255px;
    padding: 27px 7px;

    background: var(--grey7);
    border-radius: 4px;
    object-fit: contain;
  }
`;

export { Container };
