import styled from "styled-components";

const Container = styled.div`
  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;

    padding: 5px 0 20px 0;

    & > button {
      max-width: unset;
    }

    & > button:nth-child(1) {
      margin-right: 7px;
    }

    @media (max-width: 320px) {
      flex-direction: column;

      & > button {
        margin-right: 0;
        max-width: unset;
      }

      & > button:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;

export { Container };
