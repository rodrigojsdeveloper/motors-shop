import { IProduct } from "../interfaces/product.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const productSchema: SchemaOf<IProduct> = yup.object().shape({
  title: yup.string().required("title required"),
  description: yup.string().required("description required"),
  ad_type: yup.mixed().oneOf(["sale", "auction"]).required("ad_types required"),
  kilometers: yup
    .number()
    .required("kilometers required")
    .typeError("kilometers must be a number")
    .positive()
    .integer(),
  price: yup.string().required("price required"),
  vehicle_type: yup
    .mixed()
    .oneOf(["car", "motorcycle"])
    .required("vehicle_type required"),
  year: yup
    .number()
    .required("year required")
    .typeError("year must be a number")
    .positive()
    .integer(),
  cover_image: yup.string().required("cover_image required").url(),
  gallery_image: yup.string().required("gallery_image required").url(),
});

export { productSchema };
