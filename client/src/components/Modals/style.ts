import { animationModal } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: fit-content;

  border-radius: var(--border-radius);
  background-color: var(--white-fixed);

  padding: 24px;
  animation: ${animationModal} 1s;

  & > form {
    width: 100%;

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      color: var(--grey2);
    }

    & > h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--grey1);

      padding-bottom: 10px;
    }
  }

  .modalDelete {
    & > h3 {
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;

      color: var(--black-fixed);
      font-weight: bold;

      padding-bottom: 30px;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);
    }
  }

  & > img {
    width: 100%;
    height: 255px;
    padding: 27px 7px;

    background-color: var(--grey7);
    border-radius: var(--border-radius);

    object-fit: contain;
  }
`;

export { Container };
