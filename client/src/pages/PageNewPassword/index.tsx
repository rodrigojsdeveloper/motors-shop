import { Footer } from "../../components/Footer";
import { FormNewPassword } from "../../components/FormNewPassword";
import { Header } from "../../components/Header";
import { Container } from "./style";

const PageNewPassword = () => {
  return (
    <Container>
      <Header />

      <div>
        <FormNewPassword />
      </div>

      <Footer />
    </Container>
  );
};

export { PageNewPassword };
