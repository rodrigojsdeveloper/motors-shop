import styled from "styled-components";

const Container = styled.div`
  color: var(--grey10);

  width: 735px;
  height: 388px;

  border-radius: 4px;
  position: relative;
  margin-right: 24px;

  .divCardDescription {
    height: 326px;

    & > img {
      width: 735px;
      height: 326px;
      object-fit: contain;

      background-color: var(--grey7);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      mix-blend-mode: multiply;
    }

    .divDescription {
      width: 100%;
      height: 326px;
      position: absolute;
      top: 0;

      border-radius: 4px 4px 0 0;

      background: linear-gradient(
        180deg,
        var(--shadow4) 0%,
        var(--black-fixed) 100%
      );

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 25px 40px 15px 40px;

      .divTimeAuction {
        background-color: var(--white-fixed);
        border-radius: 32px;
        width: 123px;
        height: 36px;
        padding: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        time {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: var(--grey1);

          padding-left: 15px;
        }
      }

      & > div {
        width: 100%;
        height: 177px;

        & > div:nth-child(3) {
          padding: 20px 0;

          & > h5 {
            color: var(--white-fixed);
          }
        }

        .divYearKmAndPrice,
        .divYearKmAndPrice :where(div) {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
        }
        .divYearKmAndPrice {
          justify-content: space-between;
        }
      }
    }
  }

  .divRedirectsToAuction {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: var(--brand1);
    height: 62px;
    padding: 24px 36px;
    border-radius: 0 0 4px 4px;

    cursor: pointer;
    transition: 0.5s;

    & > p {
      font-weight: 600;
      font-size: 16px;
    }

    &:hover {
      background-color: var(--brand3);
    }

    @media (max-width: 768px) {
      padding: 24px;
    }
  }

  @media (max-width: 768px) {
    width: 328px;
    margin-right: 8px;
    height: 496px;

    .divCardDescription {
      height: 435px;

      & > img {
        width: 328px;
        height: 435px;
      }

      .divDescription {
        height: 435px;
        padding: 30px 20px 20px 20px;

        & > div {
          width: 275px;
          height: 298px;

          .divYearKmAndPrice {
            flex-direction: column;
            align-items: flex-start;

            & > div {
              padding-bottom: 20px;
            }
          }
        }
      }
    }
  }
`;

export { Container };
