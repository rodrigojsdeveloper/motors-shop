import { FormEmail } from "../components/FormEmail";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./Layout";

const PageEmail = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <Layout title="Recuperação de senha">
      <FormEmail />
    </Layout>
  );
};

export { PageEmail };
