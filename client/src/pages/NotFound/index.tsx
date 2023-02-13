import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/Motors shop.svg";
import robot from "../../assets/robot.png";
import { Link } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  const current_url = window.location.href.split("/")[3];

  return (
    <HelmetProvider>
      <Helmet title="Página não encontrada - Motors Shop" />
      <Container>
        <div>
          <div>
            <Link to="/">
              <img src={logo} alt="Motors shop" />
            </Link>

            <p>
              <b>404.</b> Isso é um erro.
            </p>

            <p>
              A URL solicitada /{current_url} não foi encontrada neste servidor.
            </p>
            <p>Isso é tudo que sabemos.</p>
          </div>

          <img src={robot} alt="Robot" />
        </div>
      </Container>
    </HelmetProvider>
  );
};

export { NotFound };
