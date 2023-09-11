import { IAddress } from "../interfaces/address.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const addressSchema: SchemaOf<IAddress> = yup.object().shape({
  zip_code: yup.string().required().max(8, "Maximum 8 caracters"),
  state: yup.string().required(),
  city: yup.string().required(),
  district: yup.string().required(),
  street: yup.string().required(),
  number: yup
    .number()
    .required()
    .typeError("number must be a number")
    .positive()
    .integer(),
  complement: yup.string(),
});

export { addressSchema };
