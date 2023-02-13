import { AnimateLoading } from "../../animations";
import styled from "styled-components";

const Container = styled.div`
  animation: ${AnimateLoading} 1s infinite;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: var(--white-fixed);
  height: 150px;
  width: 150px;

  margin: auto;
`;

export { Container };
