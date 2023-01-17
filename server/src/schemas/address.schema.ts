import { IAddress } from "../interfaces/address.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const addressSchema: SchemaOf<IAddress> = yup.object().shape({
  zip_code: yup
    .string()
    .required("zip_code required")
    .max(8, "Maximum 8 caracters"),
  country: yup.string().required("country required"),
  state: yup.string().required("state required"),
  city: yup.string().required("city required"),
  district: yup.string().required("district required"),
  street: yup.string().required("street required"),
  number: yup
    .number()
    .required("number required")
    .typeError("number must be a number"),
  complement: yup.string(),
});

export { addressSchema };
