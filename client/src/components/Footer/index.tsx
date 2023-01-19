import logo from "../../assets/Motors shop footer.svg";
import { Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="Motors shop" />

      <small>© 2022 - Todos os direitos reservados.</small>

      <a href="#top" onClick={() => (window.scrollY = 0)}>
        ^
      </a>
    </Container>
  );
};

export { Footer };
