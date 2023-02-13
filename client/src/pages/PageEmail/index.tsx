import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormEmail } from "../../components/FormEmail";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { useEffect } from "react";

const PageEmail = () => {
  const token = sessionStorage.getItem("Motors shop: token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);

  return (
    <HelmetProvider>
      <Helmet title="Recuperação de senha - Motors Shop" />
      <Container>
        <Header />

        <main>
          <FormEmail />
        </main>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageEmail };
