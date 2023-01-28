import styled from "styled-components";

const Container = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey5);
  max-width: 663px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
    max-width: 275px;
    height: 84px;
  }
`;

export { Container };
