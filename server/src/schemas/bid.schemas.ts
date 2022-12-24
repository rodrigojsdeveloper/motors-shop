import { IBid } from "../interfaces/bids";
import { SchemaOf } from "yup";
import * as yup from "yup";

const bidSchema: SchemaOf<IBid> = yup.object().shape({
  value: yup
    .string()
    .required("value required"),
});

export { bidSchema };
