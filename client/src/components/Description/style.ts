import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 751px;

  padding: 36px 44px;
  background: #fdfdfd;
  border-radius: 4px;

  & > h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #212529;

    padding-bottom: 30px;
  }

  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: #495057;
  }

  @media (max-width: 720px) {
    margin-top: 30px;
    padding: 30px;
  }
`;

export { Container };
