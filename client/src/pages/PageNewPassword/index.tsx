import { FormNewPassword } from "../../components/FormNewPassword";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import Helmet from "react-helmet";

const PageNewPassword = () => {
  return (
    <Container>
      <Helmet title="Recuperação de senha - Motors shop" />
      <Header />

      <main>
        <FormNewPassword />
      </main>

      <Footer />
    </Container>
  );
};

export { PageNewPassword };
