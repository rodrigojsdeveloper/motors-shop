import { Container } from "./style";

const Banner = () => {
  return (
    <Container>
      <div>
        <hgroup>
          <h1>Velocidade e experiência em um lugar feito para você</h1>

          <h2>Um ambiente feito para você explorar o seu melhor</h2>
        </hgroup>

        <div>
          <a href="#cars">Carros</a>
          <a href="#motorcycles">Motos</a>
        </div>
      </div>
    </Container>
  );
};

export { Banner };
