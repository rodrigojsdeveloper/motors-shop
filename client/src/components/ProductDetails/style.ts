import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1250px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: -525px;

  & > article {
    height: 870px;

    width: 100%;
    max-width: 751px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divCarPhotoAndDetails {
      width: 100%;
      max-width: 751px;
      height: 610px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & > p {
      background-color: red;
    }
  }

  .divPhotosAndUserDetails {
    height: 837px;
    width: 100%;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;

    .divPhotosAndUserDetails {
      width: 100%;
      max-width: 751px;
    }
  }

  @media (max-width: 768px) {
    & > article {
      height: auto;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1250px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: -525px;

  & > article {
    height: 800px;

    width: 100%;
    max-width: 751px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divCarPhotoAndDetails {
      width: 100%;
      max-width: 751px;
      height: 540px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .divPhotosAndUserDetails {
    height: 837px;
    width: 100%;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;

    .divPhotosAndUserDetails {
      width: 100%;
      max-width: 751px;
    }
  }

  @media (max-width: 768px) {
    & > article {
      height: auto;
    }
  }
`;

export { Container, Content };
