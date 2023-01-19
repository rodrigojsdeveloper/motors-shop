import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: min-content;

  background-color: var(--white-fixed);
  border-radius: 8px;
  padding: 20px;

  & > div {
    padding: 20px 0;

    & > h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: var(--black-fixed);
      font-weight: bold;

      padding-bottom: 40px;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);

      padding-bottom: 40px;
    }

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      & > button:nth-child(1) {
        margin-right: 10px;
      }

      @media (max-width: 425px) {
        flex-direction: column;

        button:nth-child(1) {
          margin-bottom: 7px;
        }

        button {
          max-width: unset;
        }
      }
    }
  }
`;

export { Container };
