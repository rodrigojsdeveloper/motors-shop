import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 312px;
  height: 350px;

  .divKmYearPrice,
  .divKmYearPrice :where(div) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .divKmYearPrice {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-right: 12px;
  }
`;

export { Container };
