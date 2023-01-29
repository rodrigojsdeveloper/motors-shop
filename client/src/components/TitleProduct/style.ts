import styled from "styled-components";

const Container = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey1);
  margin: 15px 0;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Container };
