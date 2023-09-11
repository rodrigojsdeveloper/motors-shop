import { IHeaderModal } from "../../interfaces";
import { Container } from "./style";

const HeaderModal = ({ title, setCloseModal }: IHeaderModal) => {
  return (
    <Container>
      <h2>{title}</h2>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setCloseModal(false)}
      >
        <path
          d="M18 6L6 18"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#ADB5BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export { HeaderModal };
