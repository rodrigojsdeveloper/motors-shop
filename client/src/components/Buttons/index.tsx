import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IButtons } from "../../interfaces";
import { Container } from "./style";

const Buttons = ({
  handlePreviousPage,
  handleNextPage,
  disabledNextPage,
  disabledPreviousPage,
}: IButtons) => {
  return (
    <Container>
      <button
        onClick={() => handlePreviousPage()}
        disabled={disabledPreviousPage}
      >
        <BsArrowLeft size={25} color="#5126EA" />
      </button>
      <button onClick={() => handleNextPage()} disabled={disabledNextPage}>
        <BsArrowRight size={25} color="#5126EA" />
      </button>
    </Container>
  );
};

export { Buttons };
