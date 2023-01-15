import { IButtonStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.button<IButtonStyledProps>`
  width: 100%;

  border-radius: 4px;
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

      case "buttonSizeCreateBid":
        return css`
          height: 48px;
          max-width: 179px;
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

      case "buttonSizeSellBid":
        return css`
          height: 32px;
          max-width: 64px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "buttonColorBlueLogin":
        return css`
          background-color: #4529e6;
          border: 1.5px solid #4529e6;

          color: #ffffff;
          padding: 12px 28px;

          :hover {
            background-color: #7f6fd9;
            border-color: #7f6fd9;
          }
        `;

      case "buttonColorWhiteHeader":
        return css`
          background-color: #fdfdfd;
          border: 2px solid #adb5bd;

          color: #0b0d0d;
          padding: 12px 28px;

          font-weight: 600;
          font-size: 16px;

          :hover {
            border-color: rgba(0, 0, 0, 0.15);
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            color: rgba(0, 0, 0, 0.65);
            transform: translateY(-1px);
          }
        `;

      case "buttonColorWhiteSignUp":
        return css`
          background-color: #fdfdfd;
          border: 1.5px solid #adb5bd;

          color: #0b0d0d;
          padding: 12px 28px;

          :hover {
            border-color: #4529e6;
            background-color: #4529e6;

            color: #fdfdfd;
          }
        `;

      case "buttonColorGrayFooter":
        return css`
          background-color: #212529;

          color: #ffffff;
          font-weight: 900;
        `;

      case "buttonColorBlueBanner":
        return css`
          border: 1.5px solid #fdfdfd;
          background-color: transparent;
          padding: 12px 28px;

          color: #fdfdfd;

          :hover {
            background-color: #fdfdfd;
            color: #5126ea;
          }
        `;

      case "buttonColorBlackProductDetails":
        return css`
          background-color: #0b0d0d;
          border: 1.5px solid #0b0d0d;

          padding: 12px 28px;
          font-weight: 600;
          font-size: 15px;
          color: #fff;
        `;

      case "buttonColorGrayModalEditAddress":
        return css`
          background-color: #dee2e6;
          border: 1.5px solid #dee2e6;

          padding: 12px 28px;
          font-weight: 600;
          font-size: 16px;
          color: #495057;

          :hover {
            background-color: #edf4fb;
          }
        `;

      case "buttonColorWhiteUserDetails":
        return css`
          background-color: #fdfdfd;
          border: 1.5px solid #4529e6;

          padding: 12px 28px;
          font-weight: 600;
          font-size: 16px;
          color: #4529e6;

          :hover {
            background-color: #4529e6;
            color: #fdfdfd;
          }
        `;

      case "buttonColorWhiteEditAndShowProduct":
        return css`
          padding: 12px 20px;
          border: 1.5px solid #212529;

          font-weight: 600;
          font-size: 14px;
          color: #212529;

          background-color: transparent;

          :hover {
            background-color: #212529;
            color: #fff;
          }
        `;

      case "buttonColorRedModalDeleteProduct":
        return css`
          padding: 12px 15px;
          background-color: #fdd8d8;
          border: 1.5px solid #fdd8d8;

          font-weight: 600;
          font-size: 16px;
          color: #cd2b31;

          :hover {
            border-color: #cd2b31;
          }
        `;

      case "buttonColorGraySellBid":
        return css`
          padding: 4px 8px;
          background-color: #edeafd;
          border-radius: 4px;

          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #4529e6;

          :hover {
            background-color: #dee2e6;
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
