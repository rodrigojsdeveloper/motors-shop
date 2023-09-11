import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: 945px;

  background-color: var(--white-fixed);
  border-radius: var(--border-radius);
  padding: 16px 24px;
  animation: ${animationModal} 1s;

  & > form {
    h4 {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    & > .divButtons {
      width: 100%;
      display: flex;
      flex-direction: row;

      padding-top: 30px;

      & > button:nth-child(1) {
        margin-right: 10px;
      }

      @media (max-width: 425px) {
        padding-top: 20px;
        flex-direction: column-reverse;

        & > button:nth-child(1) {
          margin-right: 0;
          max-width: unset;
        }

        & > button:nth-child(2) {
          margin-bottom: 10px;
          max-width: unset;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 1165px;
  }

  @media (max-width: 320px) {
    height: 1335px;
  }
`;

export { Container };
