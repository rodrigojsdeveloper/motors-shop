import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignIn } from "../../components/FormSignIn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { useEffect } from "react";

const SignIn = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <HelmetProvider>
      <Helmet title="Iniciar Sessão - Motors Shop" />
      <Container>
        <Header />

        <main>
          <FormSignIn />
        </main>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { SignIn };
