import styled from "styled-components";

const colors = [
  "#E34D8C",
  "#C04277",
  "#7D2A4D",
  "#7000FF",
  "#6200E3",
  "#36007D",
  "#349974",
  "#2A7D5F",
  "#153D2E",
  "#6100FF",
  "#5700E3",
  "#30007D",
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;

  & > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    margin-left: 10px;
  }
`;

const Content = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-50);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${colors[Math.floor(Math.random() * colors.length)]};

  & > p {
    font-weight: 500;
    font-size: 14px;
    color: var(--white-fixed);
  }
`;

export { Container, Content };
