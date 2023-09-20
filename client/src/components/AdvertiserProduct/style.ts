import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 312px;

  .divKmYearPrice,
  .divKmYearPrice :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .divKmYearPrice {
    justify-content: space-between;
    margin: 15px 0;
  }

  .divButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 201px;

    & > button {
      padding: 0;
    }

    & > a {
      width: 100%;
      height: 38px;
      max-width: 105px;

      background-color: var(--transparent);
      border: 1.5px solid var(--grey0);

      font-weight: 600;
      font-size: 14px;
      color: var(--grey0);

      border-radius: var(--border-radius);
      font-weight: 600;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.5s;

      :disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      :hover {
        background-color: var(--grey1);
        border-color: var(--grey1);
        color: var(--grey10);
      }
    }

    @media (max-width: 425px) {
      flex-direction: row;

      & > button {
        margin-right: 11px;
      }
    }
  }
`;

export { Container };
