import { FieldValues, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";

export interface InputProps {
  name: string;
  error?: any;
  label?: string;
  className?: string;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IButtonProps {
  size:
    | "53px"
    | "80px"
    | "100px"
    | "126px"
    | "155.5px"
    | "160px"
    | "193px"
    | "211px"
    | "262px"
    | "315px";
  color:
    | "white"
    | "blue"
    | "red"
    | "light-blue"
    | "white-grey"
    | "grey-1"
    | "grey-6";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ITextAreaProps {
  defaultValue?: string | number | readonly string[];
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: any;
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
  address: IAddress;
  products: [];
}

export interface IAddress {
  zip_code: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement?: string;
}

export interface IProductProps {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: "Gasolina" | "Etanol";
  kilometers: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  is_published: boolean;
  cover_image: string;
  primary_image: string;
  second_image: string;
  user: IUserProps;
  comments: [];
}

export interface ICommentProps {
  id: string;
  content: string;
  user: IUserProps;
  created_at: string;
}

export interface IUser {
  user: IUserProps;
}

export interface IProduct {
  product: IProductProps;
}

export interface IComment {
  comment: ICommentProps;
}

export interface IListComments {
  comments: ICommentProps[];
  loaded: boolean;
}

export interface ICreateComment {
  product: IProductProps;
  ListCommentsFunc: (comment: ICommentProps) => void;
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
  price: number;
}

export interface IModalBackground {
  children: ReactNode;
}

export interface IHeaderModal {
  title: string;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalCreateAnnouncement {
  setOpenModalCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface IShowAdvertiser {
  user: IUserProps;
  listMotorcyclesFunc: (motorcycle: IProductProps) => void;
  listCarsFunc: (car: IProductProps) => void;
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

export interface ILayout {
  children: React.ReactNode;
  title: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IProductContextData {
  products: Array<IProductProps>;
  advertiserProducts: Array<IProductProps>;
  addProduct: (product: IProductProps) => void;
  isLoading: boolean;
  isLoadingAdvertiser: boolean;
}

export interface IUserContextData {
  user: IUserProps;
}

export interface IUserProductsList {
  products: Array<IProductProps>;
  user: IUserProps;
}
