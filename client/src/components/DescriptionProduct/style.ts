import styled from "styled-components";

const Container = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey2);
  height: 48px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Container };
