import { FormNewPassword } from "../../components/FormNewPassword";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";

const PageNewPassword = () => {
  return (
    <HelmetProvider>
      <Helmet title="Recuperação de senha - Motors Shop" />
      <Container>
        <Header />

        <main>
          <FormNewPassword />
        </main>

        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export { PageNewPassword };
