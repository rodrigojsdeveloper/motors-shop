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
    | "inputModalEditAddressMedium"
    | "inputModalCreateAnnouncementSmall";
  className?: string;
  value?: any;
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
    | "buttonSizeModalEditAddressSmall"
    | "buttonSizeUserDetailsMedium"
    | "buttonSizeCreateBid"
    | "buttonSizeEditProduct"
    | "buttonSizeShowProduct"
    | "buttonSizeShowAdvertiser"
    | "buttonSizeModalEditProduct";
  color:
    | "buttonColorBlueLogin"
    | "buttonColorWhiteHeader"
    | "buttonColorGrayFooter"
    | "buttonColorBlueBanner"
    | "buttonColorWhiteSignUp"
    | "buttonColorBlackProductDetails"
    | "buttonColorGrayModalEditAddress"
    | "buttonColorWhiteUserDetails"
    | "buttonColorWhiteEditAndShowProduct";
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
  description: string;
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
  title: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  ad_type: "sale" | "auction" | string;
  vehicle_type: "car" | "motorbike" | string;
  is_published: boolean;
  cover_image: string;
  gallery_image: string;
  user: IUserProps;
}

export interface IAuctionProps {
  id: string;
  title: string;
  description: string;
  year: number;
  kilometers: number;
  price: string;
  ad_type: "sale" | "auction" | string;
  vehicle_type: "car" | "motorbike" | string;
  is_published: boolean;
  cover_image: string;
  gallery_image: string;
  user: IUserProps;
  time_limit: string;
  bids: IBid[]
}

export interface IListAuctions {
  auctions: IAuctionProps[];
}

export interface IListProducts {
  listName: string;
  products: IProductProps[];
}

export interface IBid {
  value: string
  created_at: string
  user: IUserProps
  auction: IAuctionProps
}
