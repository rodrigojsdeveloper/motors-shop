import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  margin-right: 40px;

  & > img {
    width: 312px;
    height: 152px;
    background-color: var(--grey7);
    object-fit: contain;

    &:hover {
      border: 2px solid var(--brand1);
      cursor: pointer;      
    }
  }

  & > div {
    height: 198px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;

    & > h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--grey2);
      line-height: 1.2rem;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      h6 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        margin-left: 8px;
      }
    }

    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);

      letter-spacing: .5px;
    }

    .divKmYearPrice {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      p {
        background-color: var(--brand4);
        border-radius: 4px;
        padding: 4px 8px;
        height: 32px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);

        margin-right: 5px;
      }
    }
  }

  @media (max-width: 375px) {
    margin-right: 15px;
  }
`;

export { Container };
