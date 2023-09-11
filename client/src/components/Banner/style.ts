import styled from "styled-components";

const Container = styled.div`
  height: 581px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;
  margin-top: 80px;

  background-color: var(--brand2);

  & > hgroup {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    & > h1 {
      width: 100%;
      max-width: 748px;

      font-weight: 700;
      font-size: 44px;
      line-height: 56px;

      color: var(--grey10);
      padding-bottom: 20px;

      @media (max-width: 768px) {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;

        padding-bottom: 40px;
      }
    }

    & > h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey9);
    }
  }

  @media (max-width: 768px) {
    height: 703px;
  }
`;

export { Container };
