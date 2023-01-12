import styled from "styled-components";

const Container = styled.aside`
  width: 100%;
  max-width: 440px;
  height: 426px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 36px 44px;
  border-radius: 4px;

  background: #fff;

  & > div {
    width: 100%;
    max-width: 352px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(1) {
      width: 104px;
      height: 104px;
      border-radius: 50%;

      & > p {
        font-weight: 500;
        font-size: 36px;
        line-height: 53px;
      }
    }

    & > h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;

      padding: 30px 0 15px 0;

      color: #212529;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: #495057;
      padding-bottom: 15px;
    }

    & > button {
      margin: 0 auto;
    }
  }

  @media (max-width: 720px) {
    padding: 30px;
    margin-top: 55px;
  }

  @media (max-width: 1440px) {
    max-width: 752px;
    width: 100%;
  }
`;

export { Container };
