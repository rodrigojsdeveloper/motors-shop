import { MouseEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  type?: string;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required?: boolean | undefined;
  onChange?: any;
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
    | "buttonSizeFooter";
  color:
    | "buttonColorBlueLogin"
    | "buttonColorWhiteHeader"
    | "buttonColorGrayFooter"
    | "buttonColorBlueBanner";
}

export interface IButtonStyledProps {
  size: string;
  color: string;
}
