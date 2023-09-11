import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: 1215px;

  border-radius: var(--border-radius);
  background-color: var(--white-fixed);

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

        & > button {
          max-width: unset;
        }

        & > button:nth-child(1) {
          margin-right: 0;
          margin-top: 11px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 1320px;
  }
`;

export { Container };
