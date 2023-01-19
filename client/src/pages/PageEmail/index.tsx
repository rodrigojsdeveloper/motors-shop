import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormEmail } from "../../components/FormEmail";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";

const PageEmail = () => {
  return (
    <HelmetProvider>
      <Helmet title="Recuperação de senha - Motors shop" />
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
