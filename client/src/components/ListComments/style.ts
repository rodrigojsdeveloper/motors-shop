import { AnimateLoading } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  padding: 36px 44px;

  width: 100%;
  max-width: 751px;
  height: 557px;

  background-color: var(--grey10);
  border-radius: 4px;

  margin-top: 15px;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
    padding-bottom: 18px;
  }

  & > menu {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 663px;

    height: 436px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    .loadScreen {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      padding: 0 20px;

      & > div {
        animation: ${AnimateLoading} 1s infinite;
        border: 4px solid transparent;
        border-radius: 50%;
        border-top-color: var(--black-fixed);
        height: 50px;
        width: 50px;
      }
    }
  }

  @media (max-width: 1440px) {
    margin: 20px auto 0 auto;
  }

  @media (max-width: 720px) {
    padding: 30px;
  }
`;

export { Container };
