import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: min-content;

  background-color: var(--white-fixed);
  border-radius: var(--border-radius);
  padding: 16px 24px;
  animation: ${animationModal} 1s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    width: 100%;
    max-width: 462px;
    height: 148px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 30px;
    margin-bottom: 20px;

    & > h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);
    }

    & > a {
      width: 100%;
      max-width: 132px;
      height: 38px;

      background-color: var(--brand1);
      border: 1.5px solid var(--brand1);
      border-radius: var(--border-radius);

      font-weight: 600;
      font-size: 14px;
      color: var(--white-fixed);

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border-color: var(--brand3);
        background-color: var(--brand3);
      }
    }

    @media (max-width: 425px) {
      height: min-content;

      & > h3 {
        padding-bottom: 20px;
      }

      & > p {
        padding-bottom: 15px;
      }
    }
  }
`;

export { Container };
