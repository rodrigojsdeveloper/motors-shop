import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  max-width: 751px;
  height: 213px;

  padding: 36px 44px;
  background-color: var(--white-fixed);
  border-radius: var(--border-radius);

  & > h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);

    padding-bottom: 25px;
  }

  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);

    height: 84px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 30px;
    height: 325px;

    & > p {
      height: 196px;
      -webkit-line-clamp: 7;
    }
  }
`;

export { Container };
