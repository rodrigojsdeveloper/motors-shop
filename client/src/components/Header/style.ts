import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;

  z-index: 200;
  width: 100%;
  height: 80px;
  padding: 0 60px;

  background-color: var(--grey10);
  border-bottom: 2px solid var(--grey6);

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
        color: var(--grey2);
        cursor: pointer;

        :hover {
          color: var(--black-fixed);
          text-decoration: underline;
        }
      }
    }

    & > hr {
      border: none;
      width: 2px;
      background-color: var(--grey6);
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      & > div {
        & > div {
          & > p {
            font-weight: 700;
            font-size: 14px;

            color: var(--white-fixed);
          }
        }

        & > h5 {
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;

          color: var(--grey2);
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
        color: var(--grey2);
        cursor: pointer;

        :hover {
          color: var(--black-fixed);
          text-decoration: underline;
        }
      }

      & > a:nth-child(4) {
        font-weight: 600;
        font-size: 16px;
        color: var(--brand1);

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
      background-color: var(--grey6);
    }

    & > nav:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > a:nth-child(1) {
        font-weight: 600;
        font-size: 16px;
        color: var(--brand1);

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

        background-color: var(--grey10);
        border: 2px solid var(--grey4);

        color: var(--grey0);
        padding: 12px 28px;

        font-weight: 600;
        font-size: 16px;

        :hover {
          border-color: var(--shadow3);
          box-shadow: var(--shadow1) 0 4px 12px;
          color: var(--shadow5);
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

      background-color: var(--grey10);
      filter: drop-shadow(0px 60px 40px var(--shadow2));

      & > hr {
        border: none;
        height: 2px;
        background: var(--grey6);
      }

      & > nav {
        display: flex;
        flex-direction: column;
        padding: 10px;

        & > a,
        & > p {
          font-weight: 600;
          font-size: 16px;
          color: var(--grey2);

          padding: 20px 0;

          :focus {
            color: var(--grey0);
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

          background-color: var(--grey10);
          border: 2px solid var(--grey4);

          color: var(--grey0);
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

          background-color: var(--grey10);
          border: 2px solid var(--grey4);

          color: var(--grey0);
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

      background-color: var(--grey10);
      filter: drop-shadow(0px 60px 40px var(--shadow2));

      & > hr {
        border: none;
        height: 2px;
        background-color: var(--grey6);
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
          color: var(--grey2);

          :hover {
            color: var(--black-fixed);
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
          color: var(--brand1);

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

          background-color: var(--grey10);
          border: 2px solid var(--grey4);

          color: var(--grey0);
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
    margin-right: 20px;

    border-radius: 4px;
    background-color: var(--grey9);
    box-shadow: 0px 4px 40px -10px var(--shadow4);

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

      color: var(--grey2);
      cursor: pointer;

      &:hover {
        background-color: var(--grey7);
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
    background-color: var(--grey9);
    box-shadow: 0px 4px 40px -10px var(--shadow4);

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

      color: var(--grey2);
      cursor: pointer;

      &:hover {
        background-color: var(--grey7);
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
