import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: fit-content;

  background: #ffffff;
  border-radius: 8px;
  animation: ${animationModal} 1s;
  padding: 16px 24px;

  & > div {
    padding-top: 25px;
    text-align: start;

    & > h5 {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #212529;

      padding-bottom: 30px;
      font-weight: bold;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #495057;

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
