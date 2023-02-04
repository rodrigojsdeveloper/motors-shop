import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: var(--grey8);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding: 150px 15px 15px 15px;

  & > div {
    width: 100%;
    max-width: 700px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div {
      & > p:nth-child(2) {
        padding: 30px 0;
      }

      & > p:nth-last-child(1) {
        color: var(--grey3);
        padding-top: 8px;
      }
    }

    @media (max-width: 768px) {
      & > img {
        display: none;
      }
    }
  }
`;

export { Container };
