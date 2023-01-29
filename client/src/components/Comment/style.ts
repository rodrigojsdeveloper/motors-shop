import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 663px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 25px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    & > div {
      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;

        background-color: var(--grey4);
        margin: 0 12px 0 8px;
      }
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      color: var(--grey3);
    }
  }

  & > p {
    height: 72px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      height: 168px;
      -webkit-line-clamp: 7;
    }
  }
`;

export { Container };
