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
  size: 
    | "inputSignIn" 
    | "inputSignUp" 
    | "inputSignUpSmall" 
    | "inputModalEditAddressLarge"
    | "inputModalEditAddressMedium";
  className?: string;
  value?: any
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
    | "buttonSizeModalEditAddressMedium"
    | "buttonSizeModalEditAddressSmall";
  color:
    | "buttonColorBlueLogin"
    | "buttonColorWhiteHeader"
    | "buttonColorGrayFooter"
    | "buttonColorBlueBanner"
    | "buttonColorWhiteSignUp"
    | "buttonColorBlackProductDetails"
    | "buttonColorGrayModalEditAddress";
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
  id: string;
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

export interface IProductProps {
  id: string;
  name: string;
  description: string;
  year: number;
  kilometers: number;
  ad_type: "car" | "motorbike" | string;
  price: string;
  vehicle_type: string;
  images: string;
  user: IUserProps;
}

export interface IAuctionProps {
  id: string;
  name: string;
  description: string;
  year: number;
  kilometers: number;
  ad_type: "car" | "motorbike" | string;
  price: string;
  vehicle_type: string;
  images: string;
  time_limit: string;
  user: IUserProps;
}

export interface IListAuctions {
  auctions: IAuctionProps[];
}

export interface IListProducts {
  listName: string;
  products: IProductProps[];
}
