import { IButtonStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButtonStyledProps>`
  width: 100%;

  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 16px;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case "buttonSizeLogin":
        return css`
          height: 48px;
          max-width: 315px;
        `;

      case "buttonSizeHeader":
        return css`
          height: 48px;
          max-width: 133px;
        `;

      case "buttonSizeFooter":
        return css`
          height: 50px;
          max-width: 53px;
        `;

      case "buttonSizeBanner":
        return css`
          height: 48px;
          max-width: 182.51px;
        `;

      case "buttonSizeSignUp":
        return css`
          height: 48px;
          max-width: 155.5px;
        `;

      case "buttonSizeProductDetails":
        return css`
          height: 48px;
          max-width: 206px;
        `;

      case "buttonSizeProductCarDetails":
        return css`
          height: 38px;
          max-width: 100px;
        `;

      case "buttonSizeSuccessModal":
        return css`
          height: 38px;
          max-width: 132px;
        `;

      case "buttonSizeModalEditAddressMedium":
        return css`
          height: 48px;
          max-width: 193px;
        `;

      case "buttonSizeModalEditAddressSmall":
        return css`
          height: 48px;
          max-width: 126px;
        `;

      case "buttonSizeUserDetailsMedium":
        return css`
          height: 48px;
          max-width: 126px;
        `;

      case "buttonSizeEditProduct":
        return css`
          height: 38px;
          max-width: 80px;
        `;

      case "buttonSizeShowProduct":
        return css`
          height: 38px;
          max-width: 105px;
        `;

      case "buttonSizeShowAdvertiser":
        return css`
          height: 48px;
          max-width: 160px;
        `;

      case "buttonSizeModalEditProduct":
        return css`
          height: 48px;
          max-width: 262px;
        `;

      case "buttonSizeModalDeleteProduct":
        return css`
          height: 48px;
          max-width: 211px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "buttonColorBlueLogin":
        return css`
          background-color: var(--brand1);
          border: 1.5px solid var(--brand1);

          color: var(--white-fixed);
          padding: 12px 28px;

          :hover {
            background-color: var(--brand3);
            border-color: var(--brand3);
          }
        `;

      case "buttonColorWhiteHeader":
        return css`
          background-color: var(--grey10);
          border: 2px solid var(--grey4);

          color: var(--grey0);
          padding: 12px 28px;

          font-weight: 600;
          font-size: 16px;

          :hover {
            border-color: var(--shadow3);
            box-shadow: var(--shadow1) 0 4px 12px;
            color: var(--shadow5);
            transform: translateY(-1px);
          }
        `;

      case "buttonColorWhiteSignUp":
        return css`
          background-color: var(--grey10);
          border: 1.5px solid var(--grey4);

          color: var(--grey0);
          padding: 12px 28px;

          :hover {
            border-color: var(--brand1);
            background-color: var(--brand1);

            color: var(--grey10);
          }
        `;

      case "buttonColorGrayFooter":
        return css`
          background-color: var(--grey1);

          color: var(--white-fixed);
          font-weight: 900;
          line-height: 18px;
        `;

      case "buttonColorBlueBanner":
        return css`
          border: 1.5px solid var(--grey10);
          background-color: var(--transparent);
          padding: 12px 28px;

          color: var(--grey10);

          :hover {
            background-color: var(--grey10);
            color: var(--grey1);
          }
        `;

      case "buttonColorBlackProductDetails":
        return css`
          background-color: var(--grey0);
          border: 1.5px solid var(--grey0);

          padding: 12px 28px;
          font-weight: 600;
          font-size: 15px;
          color: var(--white-fixed);
        `;

      case "buttonColorGrayModalEditAddress":
        return css`
          background-color: var(--grey6);
          border: 1.5px solid var(--grey6);

          padding: 12px 28px;
          font-weight: 600;
          font-size: 16px;
          color: var(--grey2);

          :hover {
            background-color: var(--grey5);
            border-color: var(--grey5);
          }
        `;

      case "buttonColorWhiteUserDetails":
        return css`
          background-color: var(--grey10);
          border: 1.5px solid var(--brand1);

          padding: 12px 28px;
          font-weight: 600;
          font-size: 16px;
          color: var(--brand1);

          :hover {
            background-color: var(--brand4);
          }
        `;

      case "buttonColorWhiteEditAndShowProduct":
        return css`
          padding: 12px 20px;
          border: 1.5px solid var(--grey0);

          font-weight: 600;
          font-size: 14px;
          color: var(--grey0);

          background-color: var(--transparent);

          :hover {
            background-color: var(--grey1);
            border-color: var(--grey1);
            color: var(--grey10);
          }
        `;

      case "buttonColorRedModalDeleteProduct":
        return css`
          padding: 12px 15px;
          background-color: var(--alert3);
          border: 1.5px solid var(--alert3);

          font-weight: 600;
          font-size: 16px;
          color: var(--alert1);

          :hover {
            border-color: var(--alert2);
            background-color: var(--alert2);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
