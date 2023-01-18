import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;

  z-index: 200;
  width: 100%;
  height: 80px;
  padding: 0 60px;

  background-color: #fdfdfd;
  border-bottom: 2px solid #dee2e6;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > a {
    display: flex;
    align-items: center;
    img {
      width: 153.02px;
      height: 26.34px;
      margin: auto 0;
    }
  }

  .divLogged {
    width: 100%;
    max-width: 461.73px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > nav {
      display: flex;
      align-items: center;

      & > a:nth-child(2) {
        padding: 0 25px;
      }

      & > a {
        font-weight: 600;
        font-size: 16px;
        color: #495057;
        cursor: pointer;

        :hover {
          color: #000;
          text-decoration: underline;
        }
      }
    }

    & > hr {
      border: none;
      width: 2px;
      background-color: #dee2e6;
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      & > h2 {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        padding-left: 10px;

        color: #495057;
      }
    }
  }

  .divNotLogged {
    width: 100%;
    max-width: 592px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > nav:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;

      & > a:nth-child(2) {
        padding: 0 35px;
      }

      & > a {
        font-weight: 600;
        font-size: 16px;
        color: #495057;
        cursor: pointer;

        :hover {
          color: #000;
          text-decoration: underline;
        }
      }

      & > a:nth-child(4) {
        font-weight: 600;
        font-size: 16px;
        color: #4529e6;

        padding-right: 30px;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
    }

    & > hr {
      border: none;
      width: 2px;
      background-color: #dee2e6;
    }

    & > nav:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > a:nth-child(1) {
        font-weight: 600;
        font-size: 16px;
        color: #4529e6;

        padding-right: 45px;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }

      & > a:nth-child(2) {
        width: 100%;
        height: 48px;
        max-width: 133px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 16px;

        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.5s;

        background-color: #fdfdfd;
        border: 2px solid #adb5bd;

        color: #0b0d0d;
        padding: 12px 28px;

        font-weight: 600;
        font-size: 16px;

        :hover {
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
          color: rgba(0, 0, 0, 0.65);
          transform: translateY(-1px);
        }
      }
    }
  }

  .menuIcon {
    display: none;
    margin: auto 0;

    z-index: 5px;

    .divAdvertiserLogged,
    .divNonAdvertiserLogged {
      width: 100%;
      position: fixed;

      left: 0;
      top: 77px;

      background-color: #fdfdfd;
      filter: drop-shadow(0px 60px 40px rgba(0, 0, 0, 0.09));

      & > hr {
        border: none;
        height: 2px;
        background: #dee2e6;
      }

      & > nav {
        display: flex;
        flex-direction: column;
        padding: 10px;

        & > a,
        & > p {
          font-weight: 600;
          font-size: 16px;
          color: #495057;

          padding: 20px 0;

          :focus {
            color: #0b0d0d;
            text-decoration: underline;
          }
        }

        & > a:nth-child(4) {
          width: 100%;
          height: 48px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 16px;

          border: none;

          display: flex;
          justify-content: center;
          align-items: center;

          transition: 0.5s;

          background-color: #fdfdfd;
          border: 2px solid #adb5bd;

          color: #0b0d0d;
          padding: 12px 28px;

          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    .divNonAdvertiserLogged {
      top: 80px;
      & > nav:nth-child(3) {
        & > a:nth-last-child(1) {
          width: 100%;
          height: 48px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 16px;

          border: none;

          display: flex;
          justify-content: center;
          align-items: center;

          transition: 0.5s;

          background-color: #fdfdfd;
          border: 2px solid #adb5bd;

          color: #0b0d0d;
          padding: 12px 28px;

          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    .navNotLogged {
      width: 100%;
      position: fixed;

      left: 0;
      top: 77px;

      background-color: #fdfdfd;
      filter: drop-shadow(0px 60px 40px rgba(0, 0, 0, 0.09));

      & > hr {
        border: none;
        height: 2px;
        background: #dee2e6;
      }

      & > nav:nth-child(2) {
        width: 100%;
        padding: 32px 16px;
        height: 236px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > a {
          font-weight: 600;
          font-size: 16px;
          color: #495057;

          :hover {
            color: #000;
            text-decoration: underline;
          }
        }
      }

      & > nav:nth-child(4) {
        height: 184px;
        padding: 32px 12px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > a:nth-child(1) {
          font-weight: 600;
          font-size: 16px;
          color: #4529e6;

          padding-right: 45px;
          cursor: pointer;

          :hover {
            text-decoration: underline;
          }
        }

        & > a:nth-child(2) {
          width: 100%;
          height: 48px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 16px;

          border: none;

          display: flex;
          justify-content: center;
          align-items: center;

          transition: 0.5s;

          background-color: #fdfdfd;
          border: 2px solid #adb5bd;

          color: #0b0d0d;
          padding: 12px 28px;

          font-weight: 600;
          font-size: 16px;
        }
      }
    }
  }

  .navAdvertiser {
    width: 200px;
    height: 202px;
    margin-right: 10px;

    border-radius: 4px;
    background: #f8f9fa;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 90%;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > p,
    & > a {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;

      padding: 11.5px 0;

      color: #495057;
      cursor: pointer;

      &:hover {
        background: #dbe1e7;
        border-radius: 4px;
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  .navNonAdvertiser {
    width: 200px;
    margin-right: 10px;

    border-radius: 4px;
    background: #f8f9fa;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 90%;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > p,
    & > a {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;

      padding: 11.5px 0;

      color: #495057;
      cursor: pointer;

      &:hover {
        background: #dbe1e7;
        border-radius: 4px;
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 20px;

    .divLogged,
    .divNotLogged {
      display: none;
    }

    .menuIcon {
      display: block;
    }
  }
`;

export { Container };
