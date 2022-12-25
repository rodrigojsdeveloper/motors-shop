import { MouseEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  type?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required?: boolean | undefined;
  onChange?: any;
  size: "inputSignIn" | "inputSignUp" | "inputSignUpSmall";
  className?: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  disabled?: boolean | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  size:
    | "buttonSizeLogin"
    | "buttonSizeHeader"
    | "buttonSizeBanner"
    | "buttonSizeFooter"
    | "buttonSizeSignUp"
    | "buttonSizeProductDetails"
    | "buttonSizeProductCarDetails"
    | "buttonSizeSuccessModal"
    | "buttonSizeCreateBid";
  color:
    | "buttonColorBlueLogin"
    | "buttonColorWhiteHeader"
    | "buttonColorGrayFooter"
    | "buttonColorBlueBanner"
    | "buttonColorWhiteSignUp"
    | "buttonColorBlackProductDetails";
    className?: string;
    style?: React.CSSProperties | undefined;
}

export interface IButtonStyledProps {
  size: string;
  color: string;
}

export interface InputStyledProps {
  size: string;
}

export interface IUserProps {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  birthdate: string;
  is_seller: boolean;
  zip_code: string;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
}
