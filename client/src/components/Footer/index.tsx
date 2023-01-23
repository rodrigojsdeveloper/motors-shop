import logo from "../../assets/Motors shop footer.svg";
import { Button } from "../Button";
import { Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="Motors shop" />

      <small>© 2022 - Todos os direitos reservados.</small>

      <Button
        size="buttonSizeFooter"
        color="buttonColorGrayFooter"
        type="button"
        onClick={() => window.scroll({ top: 0 })}
      >
        ^
      </Button>
    </Container>
  );
};

export { Footer };
