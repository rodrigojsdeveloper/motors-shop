import { IComment } from "../interfaces/comments";
import { SchemaOf } from "yup";
import * as yup from "yup";

const commentSchema: SchemaOf<IComment> = yup.object().shape({
  content: yup
    .string()
    .required("content required"),
});

export { commentSchema };
