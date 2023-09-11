import { IProduct } from "../interfaces/product.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const productSchema: SchemaOf<IProduct> = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required().typeError("year must be a number").integer(),
  fuel: yup.mixed().oneOf(["Gasolina", "Etanol"]).required(),
  kilometers: yup
    .number()
    .required()
    .typeError("kilometers must be a number")
    .integer(),
  color: yup.string().required(),
  fipe: yup.number().required().typeError("fipe must be a number").integer(),
  price: yup.number().required().typeError("price must be a number").integer(),
  description: yup.string().required(),
  cover_image: yup.string().required().url(),
  primary_image: yup.string().required().url(),
  second_image: yup.string().required().url(),
});

export { productSchema };
