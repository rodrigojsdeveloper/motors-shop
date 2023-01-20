import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: 985px;

  background-color: var(--white-fixed);
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${animationModal} 1s;

  & > form {
    h4 {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    & > div:nth-child(4) {
      display: flex;
      flex-direction: row;

      .inputKilometers {
        margin: 0 7px;
        max-width: 160px;

        & > input {
          max-width: 160px;
        }

        @media (max-width: 375px) {
          max-width: 110px;

          label {
            font-size: 12px;
          }

          & > input {
            max-width: 110px;
          }
        }
      }
    }

    & > div {
      & > h4 {
        margin-top: 20px;
      }

      .divButtons {
        width: 100%;
        display: flex;
        flex-direction: row;

        padding: 20px 0;

        & > button {
          max-width: unset;
        }

        & > button:nth-child(1) {
          margin-right: 7px;
        }

        @media (max-width: 320px) {
          flex-direction: column;

          & > button {
            margin-right: 0;
            max-width: unset;
          }

          & > button:nth-child(2) {
            margin-top: 10px;
          }
        }
      }
    }

    & > div:nth-child(9) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;

      padding-top: 30px;

      & > button:nth-child(1) {
        margin-right: 7px;
      }

      @media (max-width: 425px) {
        padding-top: 20px;
        flex-direction: column;

        & > button:nth-child(1) {
          margin-right: 0;
          max-width: unset;
        }

        & > button:nth-child(2) {
          margin-top: 10px;
          max-width: unset;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 1020px;
  }

  @media (max-width: 320px) {
    height: 1150px;
  }
`;

export { Container };
