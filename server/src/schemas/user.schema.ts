import { IUser } from "../interfaces/user.interface";
import { addressSchema } from "./address.schema";
import { SchemaOf } from "yup";
import * as yup from "yup";

const userSchema: SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  cellphone: yup.string().required(),
  birthdate: yup.string().required(),
  description: yup.string().required(),
  is_seller: yup.boolean().required(),
  email: yup.string().required().email("Invalid email"),
  password: yup
    .string()
    .required()
    .min(8, "Minimum 8 caracters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password must contain uppercase and lowercase letters, numbers and special characters"
    ),
  cpf: yup
    .string()
    .required()
    .max(11, "Maximum 11 caracters")
    .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/, "Invalid cpf"),
  address: addressSchema,
});

export { userSchema };
