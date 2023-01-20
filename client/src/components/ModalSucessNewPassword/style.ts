import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: fit-content;

  background-color: var(--white-fixed);
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${animationModal} 1s;

  & > div {
    padding-top: 25px;
    text-align: start;

    & > h5 {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);

      padding-bottom: 30px;
      font-weight: bold;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);

      width: 100%;
      max-width: 462px;
    }
  }

  @media (max-width: 425px) {
    & > div {
      padding-top: 20px;
      font-size: 14px;
      & > h5 {
        padding-bottom: 30px;
      }
    }
  }
`;

export { Container };
