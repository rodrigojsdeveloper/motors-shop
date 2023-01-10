import { FormSignIn } from "../../components/FormSignIn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";

const SignIn = () => {
  return (
    <Container>
      <Header />

      <main>
        <FormSignIn />
      </main>

      <Footer />
    </Container>
  );
};

export { SignIn };
