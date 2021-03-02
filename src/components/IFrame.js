import React from "react";
import styled from "styled-components";
import mac from "../assets/mac.jpg";
import iframe from "../assets/iframe@2x.png";

function IFrame(props) {
  return (
    <IFrameSection>
      <Title>xSync 개별배포 Web : iframe (PPI,KCON THAILAND 2020..)</Title>
      <IFrameContainer>
        <Desc>
          엑씽크에서 제공되는 서비스 중 엑씽크 플랫폼에 다른 프로젝트가
          노출되어야 하는 경우가 있었습니다. 주로 youtube나 비디오형태의
          웹페이지였습니다. youtube와 같이 라이브러리가 존재하는 경우에는 우선
          프로젝트의 규모에 따라 라이브러리 사용 유무를 결정하였습니다.
          프로젝트의 규모가 크지 않고 주어진 개발 기간이 충분하지 않다면
          iframe을 사용하여 우선 노출 시켰습니다. 이런 상황이 아니라면
          정보수집을 완료한 후 경험이 많은 개발팀원에게 사용경험, 장단점을 묻고
          적합한지 판단 한 후 iframe이 아닌 제공되는 라이브러리를
          사용하였습니다. 단순히 iframe 노출만이 아닌 iframe과 parent window의
          cookie 값을 postMessage 이벤트로 공유한 경험도 있습니다.
        </Desc>
      </IFrameContainer>
    </IFrameSection>
  );
}

const IFrameSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${mac});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin-bottom: 48px;
`;

const IFrameContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${iframe});
  background-size: 70% 90%;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 768px) {
    background-size: calc(100% + 50px) 100%;
    overflow: auto;
  }
`;

const Desc = styled.p`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 60vh;
    overflow: auto;
  }
`;

export default IFrame;
