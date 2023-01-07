import styled from "styled-components";

const Container = styled.section`

  width: 100%;
  max-width: 1240px;
  height: 406px;

  background: #FDFDFD;
  border-radius: 4px;

  & > div:nth-child(1) {
    width: 104px;
    height: 104px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    
    & > h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #212529;
    }

    & > p {
      padding: 4px 8px;

      background: #EDEAFD;
      border-radius: 4px;
      
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #4529E6;
    }
  }

  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
  }
`

export { Container }
