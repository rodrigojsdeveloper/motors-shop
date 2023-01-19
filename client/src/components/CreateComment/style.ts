import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 751px;

  background-color: var(--grey10);
  border-radius: 4px;

  padding: 44px 48px;
  margin-top: 40px;

  .divUserPhotoAndName {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-bottom: 10px;

    & > img {
      width: 32px;
      height: 32px;
      border-radius: 150px;
      object-fit: contain;
    }

    & > h4 {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: var(--grey1);
      margin-left: 8px;
    }
  }

  & > form {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;

    width: 100%;
    max-width: 672px;
    height: 128px;

    border: 2px solid var(--grey7);
    border-radius: 4px;

    padding: 10px;
    transition: 0.5s;

    &:hover {
      border-color: var(--black-fixed);
    }

    & > textarea {
      padding-top: 10px;

      height: 100%;
      width: 80%;

      border: none;
      resize: none;

      background: transparent;

      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;
        color: var(--grey3);

        padding: 10px 10px 0 0;
      }

      &:focus::-webkit-input-placeholder {
        color: transparent;
      }
    }

    & > button {
      font-weight: 600;
      font-size: 14px;
      max-width: 120px;
    }

    @media (max-width: 720px) {
      border: none;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      padding: 0;

      & > textarea {
        border: 2px solid var(--grey7);
        border-radius: 4px;

        width: 100%;
        height: 128px;

        margin-bottom: 20px;
        padding: 15px 0 15px 15px;

        &:hover {
          border-color: var(--black-fixed);
        }
        &::placeholder {
          font-weight: 400;
          font-size: 16px;
          line-height: 0px;
          color: var(--grey3);

          padding: 10px 10px 0 0;
        }

        &:focus::-webkit-input-placeholder {
          color: transparent;
        }
      }
    }
  }

  .divReadyComments {
    display: flex;
    flex-direction: row;

    margin-top: 15px;

    & > p {
      color: var(--grey3);
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;

      background-color: var(--grey7);
      border-radius: 24px;

      cursor: pointer;

      margin-right: 10px;
      padding: 0px 12px;
      transition: 0.5s;

      &:hover {
        color: var(--black-fixed);
      }
    }

    @media (max-width: 720px) {
      flex-direction: column;

      & > p {
        margin: 10px 0;
        width: fit-content;
      }
    }
  }

  @media (max-width: 1440px) {
    margin: 50px auto;
  }

  @media (max-width: 720px) {
    padding: 30px;
  }
`;

export { Container };
