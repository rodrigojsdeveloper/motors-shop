import { Footer } from "../../components/Footer";
import { FormSignUp } from "../../components/FormSignUp";
import { Header } from "../../components/Header";
import { Container } from "./style";

const SignUp = () => {
  return (
    <Container>
      <Header />

      <div>
        <FormSignUp />
      </div>

      <Footer />
    </Container>
  );
};

export { SignUp };
