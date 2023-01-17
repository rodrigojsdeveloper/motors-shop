import { FormEmail } from "../../components/FormEmail";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import Helmet from "react-helmet";

const PageEmail = () => {
  return (
    <Container>
      <Helmet title="Recuperação de senha - Motors shop" />
      <Header />

      <main>
        <FormEmail />
      </main>

      <Footer />
    </Container>
  );
};

export { PageEmail };
