import { FormSignIn } from "../../components/FormSignIn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import Helmet from "react-helmet";

const SignIn = () => {
  return (
    <Container>
      <Helmet title="Iniciar Sessão - Motors shop" />
      <Header />

      <main>
        <FormSignIn />
      </main>

      <Footer />
    </Container>
  );
};

export { SignIn };
