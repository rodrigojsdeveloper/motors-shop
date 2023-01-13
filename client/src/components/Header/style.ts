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

      & > h2 {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        padding-left: 10px;

        color: #495057;
      }

      & > img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .divNotLogged {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > a {
        font-weight: 600;
        font-size: 16px;
        color: #4529e6;

        padding-right: 30px;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  .divNotLogged {
    width: 100%;
    max-width: 592px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > nav {
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
      justify-content: space-between;
      align-items: center;

      a {
        font-weight: 600;
        font-size: 16px;
        color: #4529e6;

        padding-right: 45px;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  .menuIcon {
    display: none;
    margin: auto 0;

    z-index: 5px;

    .navLogged {
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

      & > div {
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
          border: 1.5px solid #000;
          border-radius: 4px;
          text-align: center;
          padding: 12px 28px;
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

      & > div:nth-child(2) {
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

      & > div:nth-child(4) {
        height: 184px;
        padding: 32px 12px;

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

        & > button {
          width: 100%;
          max-width: unset;
        }
      }
    }
  }

  .menuOpenLoggedAnnouncement {
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

      &:hover {
        background: #dbe1e7;
        border-radius: 4px;
      }
    }
  }

  .menuOpenLoggedNotAnnouncement {
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

      &:hover {
        background: #dbe1e7;
        border-radius: 4px;
      }
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

  @media (width: 280px) {
    .menuIcon {
      & > nav {
        & > hr:nth-child(1) {
          margin-top: 25px;
        }
      }
    }
  }

  @media (max-height: 500px) {
    .menuIcon {
      .navNotLogged,
      .navLogged {
        & > div:nth-child(2),
        & > div:nth-child(4) {
          height: unset;
        }

        & > div:nth-child(2) {
          flex-direction: row;
        }

        & > div:nth-child(4) {
          & > a {
            padding-bottom: 30px;
          }
        }
      }
    }
  }
`;

export { Container };
