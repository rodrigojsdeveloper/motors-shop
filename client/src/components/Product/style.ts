import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  height: 350px;
  margin-right: 40px;

  .divKmYearPrice,
  .divKmYearPrice :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .divKmYearPrice {
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    margin-right: 12px;
  }
`;

export { Container };
