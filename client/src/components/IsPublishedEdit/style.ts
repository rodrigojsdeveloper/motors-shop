import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;

  & > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 5px;

    & > button {
      max-width: unset;
    }

    & > button:nth-child(1) {
      margin-right: 7px;
    }

    @media (max-width: 425px) {
      flex-direction: column;

      & > button:nth-child(1) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;

export { Container };
