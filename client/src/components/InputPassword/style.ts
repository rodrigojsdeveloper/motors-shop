import styled from "styled-components";

const Container = styled.div`
  text-align: left;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;

    & > span {
      color: #c20707;
    }
  }

  .inputPassword {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 315px;
    height: 48px;

    padding: 8px 15px;

    border: 2px solid #e9ecef;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    transition: 0.5s;

    &:hover {
      border-color: #000;

      .biShow {
        display: block;
      }
    }

    input {
      width: 100%;
      height: 100%;

      border: none;
      background: transparent;

      &::placeholder {
        color: #868e96;
        font-size: 16px;
      }

      &:focus::-webkit-input-placeholder {
        color: transparent;
      }

      &:focus::-moz-placeholder {
        color: transparent;
      }
    }

    .biShow {
      color: #868e96;
      cursor: pointer;
      display: none;

      :hover {
        color: #000;
        transition: 1s;
      }
    }
  }

  @media (max-width: 425px) {
    .inputPassword {
      max-width: unset;
    }
  }
  @media (max-width: 265px) {
    .inputPassword {
      & > input {
        &::placeholder {
          font-size: 12px;
        }
      }
    }
  }
`;

export { Container };
