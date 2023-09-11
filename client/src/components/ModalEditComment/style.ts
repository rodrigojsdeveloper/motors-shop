import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 389px;
  height: min-content;

  background-color: var(--white-fixed);
  border-radius: var(--border-radius);
  padding: 16px 24px 24px 24px;
  animation: ${animationModal} 1s;

  .divButtons {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 15px;

    & > button:nth-child(1) {
      margin-right: 15px;
    }
  }
`;

export { Container };
