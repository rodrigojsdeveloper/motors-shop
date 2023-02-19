import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/Motors shop.svg";
import robot from "../../assets/robot.png";
import { Link } from "react-router-dom";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const currentUrl = window.location.href.split("/")[3];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Página não encontrada - Motors Shop" />
      </HelmetProvider>
      <Container>
        <div>
          <div>
            <Link to="/">
              <img src={logo} alt="Motors Shop" />
            </Link>

            <p>
              <b>404.</b> Isso é um erro.
            </p>

            <p>
              A URL solicitada /{currentUrl} não foi encontrada neste servidor.
            </p>
            <p>Isso é tudo que sabemos.</p>
          </div>

          <img src={robot} alt="Robot" />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { NotFound };
