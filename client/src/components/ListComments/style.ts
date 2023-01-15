import { AnimateLoading } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  padding: 36px 44px;

  width: 100%;
  max-width: 751px;
  height: 557px;

  background: #fdfdfd;
  border-radius: 4px;

  margin-top: 15px;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #212529;
    padding-bottom: 18px;
  }

  & > menu {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 663px;

    height: 436px;
    overflow-y: auto;

    & > section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;

      & > p {
        text-align: center;
        font-size: 25px;
        color: #868e96;
        font-weight: bold;
        padding: 0 20px;
      }

      @media (max-width: 425px) {
        & > p {
          font-size: 18px;
        }
      }
    }

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
        border-top-color: #000;
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
