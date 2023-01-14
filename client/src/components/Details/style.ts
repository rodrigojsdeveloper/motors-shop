import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 752px;
  height: 239.39px;

  padding: 28px 44px;
  background: #fdfdfd;
  border-radius: 4px;

  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > p:nth-child(1) {
        margin-right: 5px;
      }

      & > p {
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

  & > a {
    width: 100%;
    max-width: 100px;
    height: 38px;

    padding: 12px 20px;
    background: #4529e6;
    border: 1.5px solid #4529e6;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.5s;

    &:hover {
      background-color: #7f6fd9;
      border-color: #7f6fd9;
    }
  }

  @media (max-width: 720px) {
    padding: 30px;
    height: unset;

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
