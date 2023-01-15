import { InputStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: left;
  padding-top: 20px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;

    & > span {
      color: #c20707;
    }
  }
`;

const InputContainer = styled.input<InputStyledProps>`
  width: 100%;

  padding: 15px;

  border: 2px solid #e9ecef;
  border-radius: 4px;

  font-weight: 400;
  font-size: 16px;

  transition: 0.5s;
  background: transparent;

  &::placeholder {
    color: #868e96;
  }

  &:hover {
    border-color: #000;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus::-moz-placeholder {
    color: transparent;
  }

  ${({ size }) => {
    switch (size) {
      case "inputSignIn":
        return css`
          max-width: 315px;
          height: 48px;
        `;

      case "inputSignUp":
        return css`
          max-width: 315px;
          height: 80px;
        `;

      case "inputSignUpSmall":
        return css`
          max-width: 155.5px;
          height: 48px;
        `;

      case "inputModalEditAddressLarge":
        return css`
          max-width: 466px;
          height: 48px;
        `;

      case "inputModalEditAddressMedium":
        return css`
          max-width: 228px;
          height: 48px;
        `;

      case "inputModalCreateAnnouncementSmall":
        return css`
          max-width: 148px;
          height: 48px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container, InputContainer };
