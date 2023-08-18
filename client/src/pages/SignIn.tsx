import { FormSignIn } from "../components/FormSignIn";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import { useEffect } from "react";

const SignIn = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <Layout title="Iniciar Sessão">
      <FormSignIn />
    </Layout>
  );
};

export { SignIn };
