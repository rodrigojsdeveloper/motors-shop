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

  background-color: var(--grey10);
  border-radius: 4px;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
    padding-bottom: 20px;
  }

  & > div {
    width: 100%;
    max-width: 352px;
    height: 248px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      width: 100%;
      height: 108px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > div {
        width: 100%;
        height: 108px;
        max-width: 108px;

        padding: 27px 7px;

        background-color: var(--grey7);
        border-radius: 4px;

        & > img {
          width: 100%;
          max-width: 94.22px;
          height: 54.05px;

          object-fit: contain;
        }
      }

      & > div:nth-child(2) {
        margin: 0 5px;
      }
    }
  }

  @media (max-width: 1440px) {
    max-width: 752px;
    width: 100%;
    margin-top: 17px;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export { Container };
