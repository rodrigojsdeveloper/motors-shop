import { Footer } from "../../components/Footer";
import { FormSignIn } from "../../components/FormSignIn";
import { Header } from "../../components/Header";
import { Container } from "./style";

const SignIn = () => {
  return (
    <Container>
      <Header />

      <div>
        <FormSignIn />
      </div>

      <Footer />
    </Container>
  );
};

export { SignIn };
