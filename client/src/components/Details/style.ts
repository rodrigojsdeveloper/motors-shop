import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 752px;

  padding: 28px 44px;
  background: #fdfdfd;
  border-radius: 4px;

  margin-top: 10px;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #212529;

    margin-bottom: 55px;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;

    & > div {
      width: 100%;
      max-width: 113px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > p {
        width: 50px;
        height: 32px;

        padding: 4px 8px;
        background: #edeafd;
        border-radius: 4px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #4529e6;
      }
    }

    & > span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #212529;
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
    padding: 30px;

    & > h3 {
      margin-bottom: 20px;
    }

    & > div {
      flex-direction: column;
      align-items: unset;
      margin-bottom: 15px;

      & > div {
        padding-bottom: 20px;
      }
    }
  }
`;

export { Container };
