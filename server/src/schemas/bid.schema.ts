import { IBid } from "../interfaces/bid.interface";
import { SchemaOf } from "yup";
import * as yup from "yup";

const bidSchema: SchemaOf<IBid> = yup.object().shape({
  value: yup.string().required(),
});

export { bidSchema };
