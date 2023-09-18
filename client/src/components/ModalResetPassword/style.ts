import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;

  border-radius: var(--border-radius);
  background-color: var(--white-fixed);

  padding: 16px 24px;
  animation: ${animationModal} 1s;

  & > form {
    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);
    }

    .divButtons {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding-top: 25px;

      & > button:nth-child(1) {
        margin-right: 15px;
      }

      @media (max-width: 425px) {
        padding-top: 20px;
        flex-direction: column-reverse;

        & > button {
          max-width: unset;
        }

        & > button:nth-child(1) {
          margin-right: 0;
        }

        & > button:nth-child(2) {
          margin-bottom: 11px;
        }
      }
    }
  }
`;

export { Container };
