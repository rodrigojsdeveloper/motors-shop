import { IUser } from "../interfaces/users";
import { SchemaOf } from "yup";
import * as yup from "yup";

const userSchema: SchemaOf<IUser> = yup.object().shape({
	name: yup
		.string()
		.required("name required"),
	cellphone: yup
		.string()
		.required("cellphone required"),
	birthdate: yup
		.string()
		.required("birthdate required"),
	description: yup
		.string()
		.required("description required"),
	is_seller: yup
		.boolean()
		.required("is_seller required"),
	email: yup
		.string()
		.required("email required")
		.email("Invalid email"),
	password: yup
		.string()
		.required("password required")
		.min(8, "Minimum 8 caracters")
		.matches(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
				"Password must contain uppercase and lowercase letters, numbers and special characters"
			),
	cpf: yup
		.string()
		.required("cpf required")
		.max(11, "Maximum 11 caracters")
		.matches(
				/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
				"Invalid cpf"
			),
	address: yup
		.object()
		.required("address required"),
});

export { userSchema };
