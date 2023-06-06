import { IProduct } from "../interfaces/product.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const productSchema: SchemaOf<IProduct> = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  ad_type: yup.mixed().oneOf(["sale", "auction"]).required(),
  kilometers: yup
    .number()
    .required()
    .typeError("kilometers must be a number")
    .integer(),
  price: yup.string().required(),
  vehicle_type: yup.mixed().oneOf(["car", "motorcycle"]).required(),
  year: yup
    .number()
    .required()
    .typeError("year must be a number")
    .integer(),
  cover_image: yup.string().required().url(),
  gallery_image: yup.string().required().url(),
});

export { productSchema };
