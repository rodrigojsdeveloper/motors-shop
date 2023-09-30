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

  .buttonOut {
    width: 100%;
    max-width: 133px;
    height: 48px;

    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--grey2);
    border: 2px solid var(--grey4);
    background-color: var(--grey10);
    border-radius: var(--border-radius);

    padding: 12px 28px;

    &:hover {
      background-color: var(--gray0);
    }

    &:active {
      background-color: var(--gray1);
    }

    @media (max-width: 768px) {
      max-width: unset;
    }
  }

  .link {
    width: 100%;

    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey3);
    text-align: center;

    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--shadow-hover-link-modal);
    }

    &:active {
      background-color: var(--shadow-active-link-modal);
    }
  }

  .link.login:hover {
    color: var(--grey2);
    background-color: var(--transparent);
  }

  .divLogged {
    width: 100%;
    max-width: 185px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > hr {
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
    max-width: 313px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > hr {
      width: 2px;
      background-color: var(--grey6);
    }

    & > nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > a:nth-child(1) {
        padding-right: 45px;
      }
    }
  }

  .menuIcon {
    display: none;
    margin: auto 0;

    z-index: 5px;

    .divAdvertiserLogged,
    .divNonAdvertiserLogged,
    .navNotLogged {
      width: 100%;

      position: fixed;
      left: 0;
      top: 80px;

      background-color: var(--grey10);
      filter: drop-shadow(0px 60px 40px var(--shadow2));
    }

    .divAdvertiserLogged,
    .divNonAdvertiserLogged {
      & > nav {
        height: 250px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 20px 10px;
      }
    }

    .divNonAdvertiserLogged {
      & > nav {
        height: 200px;
      }
    }

    .navNotLogged {
      & > nav {
        height: 140px;
        padding: 20px 12px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .navAdvertiser,
  .navNonAdvertiser {
    width: 200px;
    height: 202px;
    margin-right: 15px;

    border-radius: var(--border-radius);
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
      padding: 11.5px 0;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .navNonAdvertiser {
    height: unset;
  }

  @media (max-width: 768px) {
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
