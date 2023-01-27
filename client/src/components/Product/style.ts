import styled from "styled-components";

const Container = styled.div`
  width: 312px;
  margin-right: 40px;

  .divKmYearPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  @media (max-width: 375px) {
    margin-right: 12px;
  }
`;

export { Container };
