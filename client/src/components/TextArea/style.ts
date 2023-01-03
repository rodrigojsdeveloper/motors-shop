import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
  }

  & > textarea {
    resize: none;

    background: transparent;
    width: 100%;

    padding: 15px;

    border: 2px solid #e9ecef;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    transition: 0.5s;
    height: 80px;

    &::placeholder {
      color: #868e96;
    }

    &:hover {
      border-color: #000;
    }

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

export { Container };
