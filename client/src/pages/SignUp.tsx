import { ModalSucessRegister } from "../components/ModalSucessRegister";
import { ModalBackground } from "../components/ModalBackground";
import { FormSignUp } from "../components/FormSignUp";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from "./Layout";

const SignUp = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (token) return navigate("/");
  }, [token]);

  return (
    <Layout title="Cadastro">
      {openModalSuccess ? (
        <ModalBackground>
          <ModalSucessRegister setOpenModalSuccess={setOpenModalSuccess} />
        </ModalBackground>
      ) : null}
      <FormSignUp setOpenModalSuccess={setOpenModalSuccess} />
    </Layout>
  );
};

export { SignUp };
