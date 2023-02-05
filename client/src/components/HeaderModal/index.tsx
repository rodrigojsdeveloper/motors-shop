import close from "../../assets/x.svg";
import { IHeaderModal } from "../../interfaces";
import { Container } from "./style";

const HeaderModal = ({ title, setCloseModal }: IHeaderModal) => {
  return (
    <Container>
      <h2>{title}</h2>

      <img src={close} onClick={() => setCloseModal(false)} />
    </Container>
  );
};

export { HeaderModal };
