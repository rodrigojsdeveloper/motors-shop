import { IAuction } from "../interfaces/auctions";
import { SchemaOf } from "yup";
import * as yup from "yup";

const auctionSchema: SchemaOf<IAuction> = yup.object().shape({
  name: yup
    .string()
    .required("name required"),
  description: yup
    .string()
    .required("description required"),
  ad_type: yup
    .string()
    .required("ad_types required"),
  kilometers: yup
    .number()
    .required("kilometers required")
    .typeError("Amount must be a number"),
  price: yup
    .string()
    .required("price required"),
  vehicle_type: yup
    .string()
    .required("vehicle_type required"),
  year: yup
    .number()
    .required("year required")
    .typeError("Amount must be a number"),
  images: yup
    .string()
    .required("images required"),
  time_limit: yup
		.string()
		.required("time_limit required"),
});

export { auctionSchema };
