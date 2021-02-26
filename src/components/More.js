import React from "react";
import styled, { keyframes } from "styled-components";
import useFadein from "../hooks/useFadeIn";

function More() {
  const refAndroid = useFadein();
  const refiOS = useFadein();
  const refServer = useFadein();
  const refWeb = useFadein();
  const refReact = useFadein();
  return (
    <MoreContainer id="More">
      <Line />
      <LeftBox>
        <DetailBox {...refAndroid}>
          Android : 안드로이드 프로젝트 생성 부터 배포 까지 경험한 적이
          있습니다. picasso 라이브러리를 이용한 화면 구현 부터 retrofit을 이용한
          api 통신 까지 다양한 라이브러리를 적용 할 수 있습니다. xSync, 갤럭시
          팬파티, SK 나이츠 안드로이드 앱 배포 및 유지보수를 진행하였습니다.
        </DetailBox>
        <DetailBox {...refiOS}>
          iOS : SK 나이츠, 그린 플러그드, Next Rise 등 약 100여개의
          어플리케이션을 배포한 경험이 있습니다.
        </DetailBox>
        <DetailBox {...refServer}>
          Server : MVC 패턴을 숙지하여 Python Django의 rest framwork 로 API를
          구현할 수 있습니다. ERD 작성을 통해 서버의 모델을 구축할 수 있으며
          데이터 무결성과 검색 비용에 대해 고민합니다.
        </DetailBox>
      </LeftBox>
      <RightBox>
        <DetailBox {...refWeb}>
          Web(Vue.js) : Vue.js 프레임워크 기반의 웹서비스를 개발한 적이
          있습니다. 모든 서비스를 모바일 화면에서도 확인이 가능하게 제작하여
          반응형 레이아웃에 대한 이해도가 높습니다. SCSS를 사용하여 화면을
          구현해낼 수 있습니다.
        </DetailBox>
        <DetailBox {...refReact}>
          Web(React) : 토이 프로젝트를 통해 react를 학습하였으며 axios, styled
          components, react router, props-type 등의 라이브러리 적용이
          가능합니다. class component 형태의 Container Presenter 패턴에 대해
          이해하고 있습니다. 또한 react hook을 이용하여 함수형 component를
          만들어 낼 수 있습니다.
        </DetailBox>
      </RightBox>
    </MoreContainer>
  );
}

const MoreContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  color: #fefefe;
  background-color: #444444;

  @media only screen and (max-width: 768px) {
    min-height: 100vh;
    height: 100%;
    padding-top: 55px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Line = styled.div`
  width: 1px;
  height: calc(100vh - 70px);
  background-color: #555555;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate-x(-50%);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: 50px;

  @media only screen and (max-width: 768px) {
    height: 100%;
    margin-right: 0;
    align-items: center;
    justify-content: space-around;
  }
`;

const RightBox = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    height: 100%;
    align-items: center;
  }
`;

const popup = keyframes`
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    box-shadow: none;
  }
  100% {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    box-shadow:0 40px 20px rgba(0, 0, 0, 0.3);
  }
`;

const DetailBox = styled.p`
  width: 320px;
  background-color: #555555;
  padding: 20px 15px;
  border-radius: 16px;
  box-shadow: -1px 3px 11px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    animation: ${popup} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default More;
