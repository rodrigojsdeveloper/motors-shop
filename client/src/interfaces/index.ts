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
    | "47px"
    | "80px"
    | "120px"
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

export interface IButtonStyledProps {
  size: string;
  color: string;
}

export interface ITextAreaProps {
  defaultValue?: string | number | readonly string[];
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: any;
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
  color: string;
  address: IAddressProps;
  products: [];
}

export interface IAddressProps {
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
  fuel: "gasoline" | "ethanol";
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

export interface IModalEditComment extends IOpenModal {
  comment_id: string;
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

export interface ImageProductProps {
  src: string;
  alt: string;
}

export interface ITitleProduct {
  title: string;
}

export interface IDescription {
  description: string;
}

export interface IAvatarUser {
  username: string;
  color: string;
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

export interface IHeaderModal {
  title: string;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IOpenModal {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalDelete extends IOpenModal {
  productId: string;
}

export interface IModalEdit {
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProductProps;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalPhoto extends IOpenModal {
  cover_image: string;
  title: string;
}

export interface IPhoto extends IOpenModal {
  image: string;
  alt: string;
}

export interface IPhotosGallery {
  primary_image: string;
  second_image: string;
  model: string;
}

export interface IProductDetails extends IOpenModal {
  product: IProductProps;
}

export interface IUserProductsProduct {
  product: IProductProps;
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
  isLoading: boolean;
  isLoadingAdvertiser: boolean;
  handlePostProduct: (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    data: any,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleEditProduct: (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    isPublished: boolean,
    data: any,
    product: IProductProps,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleDeleteProduct: (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    productId: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleGetProduct: (productId: string) => IProductProps;
  disabledNextPage: boolean;
  disabledPreviousPage: boolean;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  setDisabledNextPage: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledPreviousPage: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  productsPerPage: number;
  paginatedProducts: Array<IProductProps>;
}

export interface IUserContextData {
  user: IUserProps;
  handleEditUser: (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    user: IUserProps,
    data: any,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleResetPassword: (
    setLoad: React.Dispatch<React.SetStateAction<boolean>>,
    data: any,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    userId: string | undefined
  ) => void;
}

export interface IUserProductsList {
  products: Array<IProductProps>;
  user: IUserProps;
}

export interface IsPublishedEditProps {
  setIsPublished: React.Dispatch<React.SetStateAction<boolean>>;
  is_published: boolean;
}

export interface ISelectProps {
  name: string;
  register: UseFormRegister<FieldValues>;
}

export interface ISelectEditProps extends ISelectProps {
  defaultValue: string | number | readonly string[];
}

export interface IButtons {
  disabledPreviousPage: boolean;
  disabledNextPage: boolean;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}
