import { IButtonStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButtonStyledProps>`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border-radius: var(--border-radius);

  transition: 0.5s;
  padding: 12px 28px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "53px":
        return css`
          height: 50px;
          max-width: 53px;
        `;

      case "80px":
        return css`
          height: 38px;
          max-width: 80px;
        `;

      case "100px":
        return css`
          height: 38px;
          max-width: 100px;
        `;

      case "126px":
        return css`
          max-width: 126px;
        `;

      case "155.5px":
        return css`
          max-width: 155.5px;
        `;

      case "160px":
        return css`
          max-width: 160px;
        `;

      case "193px":
        return css`
          max-width: 193px;
        `;

      case "211px":
        return css`
          max-width: 211px;
        `;

      case "262px":
        return css`
          max-width: 262px;
        `;

      case "315px":
        return css`
          max-width: 315px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          color: var(--grey0);
          background-color: var(--grey10);
          border: 1.5px solid var(--grey4);
        `;

      case "blue":
        return css`
          color: var(--white-fixed);
          background-color: var(--brand1);
          border: 1.5px solid var(--brand1);

          &:hover {
            border-color: var(--brand3);
            background-color: var(--brand3);
          }
        `;

      case "red":
        return css`
          color: var(--alert1);
          background-color: var(--alert3);
          border: 1.5px solid var(--alert3);

          padding: 12px 15px;

          &:hover {
            border-color: var(--alert2);
            background-color: var(--alert2);
          }
        `;

      case "light-blue":
        return css`
          color: var(--brand1);
          background-color: var(--grey10);
          border: 1.5px solid var(--brand1);

          &:hover {
            background-color: var(--brand4);
          }
        `;

      case "white-grey":
        return css`
          font-size: 14px;

          color: var(--grey0);
          border: 1.5px solid var(--grey0);
          background-color: var(--transparent);

          &:hover {
            color: var(--grey10);
            border-color: var(--grey1);
            background-color: var(--grey1);
          }
        `;

      case "grey-1":
        return css`
          color: var(--white-fixed);
          background-color: var(--grey1);
        `;

      case "grey-6":
        return css`
          color: var(--grey2);
          background-color: var(--grey6);
          border: 1.5px solid var(--grey6);

          &:hover {
            background-color: var(--grey5);
            border-color: var(--grey5);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
