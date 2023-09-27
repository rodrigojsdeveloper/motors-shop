import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 751px;
  height: 239.39px;

  padding: 28px 44px;
  background-color: var(--grey10);
  border-radius: var(--border-radius);

  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);

    margin-bottom: 55px;
    height: 32.39px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      -webkit-line-clamp: 3;
      height: 75px;
    }
  }

  & > div,
  & > div :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & > div {
    width: 100%;
    justify-content: space-between;

    margin-bottom: 30px;
  }

  & > a {
    width: 100%;
    max-width: 100px;
    height: 38px;

    padding: 12px 20px;
    background-color: var(--brand1);
    border: 1.5px solid var(--brand1);
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 14px;
    color: var(--white-fixed);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: var(--brand3);
      border-color: var(--brand3);
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    height: 326.91px;

    & > h3 {
      margin-bottom: 20px;
    }

    & > div {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 15px;

      & > div {
        padding-bottom: 20px;
        justify-content: flex-start;
      }
    }
  }
`;

export { Container };
