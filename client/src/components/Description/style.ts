import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  max-width: 751px;
  height: 239.39px;

  padding: 36px 44px;
  background-color: var(--white-fixed);
  border-radius: 4px;

  & > h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);

    padding-bottom: 25px;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    height: 100%;
    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);

      overflow-y: auto;
    }
  }

  @media (max-width: 720px) {
    margin-top: 30px;
    padding: 30px;
    height: unset;
  }
`;

export { Container };
