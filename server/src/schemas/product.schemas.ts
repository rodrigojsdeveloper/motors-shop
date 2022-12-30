import { IProduct } from "../interfaces/product.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const productSchema: SchemaOf<IProduct> = yup.object().shape({
  title: yup.string().required("title required"),
  description: yup.string().required("description required"),
  ad_type: yup.string().required("ad_types required"),
  kilometers: yup
    .number()
    .required("kilometers required")
    .typeError("Amount must be a number"),
  price: yup.string().required("price required"),
  vehicle_type: yup.string().required("vehicle_type required"),
  year: yup
    .number()
    .required("year required")
    .typeError("Amount must be a number"),
  cover_image: yup.string().required("cover_image required"),
  gallery_image: yup.string().required("gallery_image required"),
});

export { productSchema };
