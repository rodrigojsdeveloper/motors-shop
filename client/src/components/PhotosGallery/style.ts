import styled from "styled-components";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 44px;

  width: 100%;
  max-width: 440px;
  height: 377px;

  background: #fdfdfd;
  border-radius: 4px;
  margin-top: 15px;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #212529;
    padding-bottom: 20px;
  }

  & > div {
    display: flex;
    width: 100%;
    max-width: 352px;
    height: 248px;

    flex-direction: column;
    justify-content: space-between;

    & > div {
      display: flex;
      width: 100%;
      max-width: 352px;
      flex-direction: row;
      justify-content: space-between;

      & > div {
        width: 100%;
        max-width: 108px;
        height: 108px;
        padding: 27px 7px;

        background: #e9ecef;
        border-radius: 4px;

        & > img {
          width: 100%;
          max-width: 94.22px;
          height: 54.05px;

          object-fit: contain;
        }
      }

      & > div:nth-child(2) {
        margin: 0 7px;
      }
    }
  }

  @media (max-width: 1440px) {
    max-width: 752px;
    width: 100%;
    margin-top: 17px;
  }

  @media (max-width: 720px) {
    padding: 30px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export { Container };
