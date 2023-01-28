import styled from "styled-components";

const Container = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: var(--grey10);
  max-width: 663px;
  padding-bottom: 15px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
    max-width: 275px;
    height: 50px;
    padding-bottom: 20px;
  }
`;

export { Container };
