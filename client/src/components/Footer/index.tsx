import logo from "../../assets/Motors shop footer.svg";
import { Container } from "./style";
import { Button } from "../Button";

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="Motors shop" title="Motors shop" />

      <small>© 2022 - Todos os direitos reservados.</small>

      <a href="#top">
        <Button
          onClick={() => (window.scrollY = 0)}
          size="buttonSizeFooter"
          color="buttonColorGrayFooter"
          type="button"
        >
          ^
        </Button>
      </a>
    </Container>
  );
};

export { Footer };
