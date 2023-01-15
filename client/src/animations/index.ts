import { keyframes } from "styled-components";

const AnimateLoading = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const animationModal = keyframes`
  from {
    opacity: 0;
    transform: translatey(-50px);
  }
    
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export { AnimateLoading, animationModal };
