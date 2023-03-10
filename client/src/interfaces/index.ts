import { FieldValues, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  size:
    | "inputSignIn"
    | "inputSignUp"
    | "inputSignUpSmall"
    | "inputModalEditAddressLarge"
    | "inputModalEditAddressMedium"
    | "inputModalCreateAnnouncementSmall";
  className?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
}

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
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
    | "buttonSizeModalEditProduct"
    | "buttonSizeModalDeleteProduct"
    | "buttonSizeSellBid";
  color:
    | "buttonColorBlueLogin"
    | "buttonColorWhiteHeader"
    | "buttonColorGrayFooter"
    | "buttonColorBlueBanner"
    | "buttonColorWhiteSignUp"
    | "buttonColorBlackProductDetails"
    | "buttonColorGrayModalEditAddress"
    | "buttonColorWhiteUserDetails"
    | "buttonColorWhiteEditAndShowProduct"
    | "buttonColorRedModalDeleteProduct"
    | "buttonColorGraySellBid";
  className?: string;
  style?: React.CSSProperties | undefined;
}

export interface ITextAreaProps {
  value?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: any;
}

export interface InputStyledProps {
  size: any;
}

export interface IButtonStyledProps {
  size: string;
  color: string;
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
  products: [];
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
  comments: [];
}

export interface IAuctionProps {
  id: string;
  product: IProductProps;
  user: IUserProps;
  time_limit: string;
  bids: [];
}

export interface ICommentProps {
  id: string;
  content: string;
  user: IUserProps;
  created_at: string;
}

export interface IBidProps {
  id: string;
  value: string;
  created_at: string;
  user: IUserProps;
  auction: IAuctionProps;
}

export interface IUser {
  user: IUserProps;
}

export interface IProduct {
  product: IProductProps;
}

export interface IAuction {
  auction: IAuctionProps;
}

export interface IComment {
  comment: ICommentProps;
}

export interface IBid {
  bid: IBidProps;
}

export interface IListProducts {
  products: IProductProps[];
}

export interface IListAuctions {
  auctions: IAuctionProps[];
}

export interface IListComments {
  comments: ICommentProps[];
  loaded: boolean;
}

export interface IListBids {
  bids: IBidProps[];
  loaded: boolean;
  auction: IAuctionProps;
}

export interface ICreateComment {
  product: IProductProps;
  ListCommentsFunc: (comment: ICommentProps) => void;
}

export interface ICreateBid {
  auction: IAuctionProps;
  ListBidsFunc: (bid: IBidProps) => void;
}

export interface IimageProduct {
  src: string;
  alt: string;
}

export interface ITitleProduct {
  title: string;
}

export interface IDescription {
  description: string;
}

export interface IAdType {
  setSaleOrAuctionAdType: React.Dispatch<React.SetStateAction<boolean>>;
  ad_type?: string;
}

export interface ITypeOfVehicle {
  setBuyerOrAdvertiserVehicleType: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  vehicle_type?: string;
}

export interface IAvatarUser {
  username: string;
}

export interface IYearProduct {
  year: number;
}

export interface IKmProduct {
  km: number;
}

export interface IPriceProduct {
  price: string;
}

export interface IModalBackground {
  children: ReactNode;
}

export interface IHeaderModal {
  title: string;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalCreateAnnouncement {
  setCloseModalCreateAnnouncement: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  listMotorcyclesFunc: (motorcycle: IProductProps) => void;
  listCarsFunc: (car: IProductProps) => void;
  listAuctionsFunc: (auction: IAuctionProps) => void;
}

export interface IModalDelete {
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string;
}

export interface IModalEdit {
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProductProps;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalEditAddress {
  setOpenModalEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalEditUser {
  setOpenModalEditUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalPhoto {
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
  cover_image: string;
  title: string;
}

export interface IModalSuccess {
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPhoto {
  image: string;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPhotosGallery {
  gallery_image: string;
}

export interface IProductDetails {
  product: IProductProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAuctionDetails {
  auction: IAuctionProps;
  setOpenModalPhoto: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IShowAdvertiser {
  user: IUserProps;
  listMotorcyclesFunc: (motorcycle: IProductProps) => void;
  listCarsFunc: (car: IProductProps) => void;
  listAuctionsFunc: (auction: IAuctionProps) => void;
}

export interface IUserProductsProduct {
  product: IProductProps;
  user: IUserProps;
}

export interface IUserProductsListCars {
  products: IProductProps[];
  user: IUserProps;
}

export interface IEmptyMessage {
  message: string;
}
