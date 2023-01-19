import { Helmet, HelmetProvider } from "react-helmet-async";
import { FormSignIn } from "../../components/FormSignIn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";

const SignIn = () => {
  return (
    <HelmetProvider>
      <Helmet title="Iniciar Sessão - Motors shop" />
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
