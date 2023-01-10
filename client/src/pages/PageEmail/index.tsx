import { Footer } from "../../components/Footer";
import { FormEmail } from "../../components/FormEmail";
import { Header } from "../../components/Header";
import { Container } from "./style";

const PageEmail = () => {
  return (
    <Container>
      <Header />

      <main>
        <FormEmail />
      </main>

      <Footer />
    </Container>
  );
};

export { PageEmail };
