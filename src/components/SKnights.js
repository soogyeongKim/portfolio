import React from "react";
import styled from "styled-components";
import skMain from "../assets/sk-main.jpg";
import skQR from "../assets/sk-qr.jpg";

function SKnights(props) {
  return (
    <SKnightsSection>
      <Title>xSync 개별배포 앱 : Sk Knights (Android, iOS)</Title>
      <SKnightsContainer>
        <DescBox>
          <Desc>
            개발팀 구성(4) : 안드로이드 개발 2, iOS 개발 2, 서버 1
            <br />
            프로젝트 참여도 : 30%
            <br />
            <br />
            담당 업무
            <br />
            iOS/안드로이드 서브개발, 앱 제작 및 배포, 앱 사후관리
          </Desc>
          <Desc style={{ textAlign: "left" }}>
            SK 나이츠의 농구경기 어플리케이션으로 농구경기 진행 시 다양한 이벤트
            및 카드섹션, 입장 체크 등의 기능이 있습니다. QR 코드를 통해 입장
            체크를 진행하는 기능을 개발하였습니다. QR 체크 후 api 통신하여 받아
            낸 결과 값에 따라 토스트 메세지, 변환 된 이미지를 노출하는 방식으로
            만들었습니다.
            <br />
            <br />
            많은 유저들의 선택을 받은 이 어플리케이션은 농구경기가 진행 되지
            않을 때에도 활용도가 높아 스토어에 주기적으로 업데이트 하여
            유지보수를 진행하였습니다.
            <br />
            <br />
            사후 데이터 관리에도 집중했습니다. 자체 서버로 수집한 데이터(메뉴별
            클릭 수, 컨텐츠 별 조회 수)와 앱스토어, 플레이스토어에 추적 된
            데이터(앱다운로드 수, 이탈자 수) 들을 모아 웹으로 통계 페이지를
            제작하였습니다.
          </Desc>
        </DescBox>
        <BackgroundImgBox>
          <BackgroundImg src={skMain}></BackgroundImg>
          <BackgroundImg src={skQR}></BackgroundImg>
        </BackgroundImgBox>
      </SKnightsContainer>
    </SKnightsSection>
  );
}

const SKnightsSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c2029;
  color: #fff;
`;

const SKnightsContainer = styled.div`
  width: calc(90% - 20px);
  min-height: calc(80vh - 20px);
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #000;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: lighter;
  margin-bottom: 3rem;
`;

const BackgroundImgBox = styled.div`
  width: 60%;
  max-height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const BackgroundImg = styled.img`
  max-width: 40%;
  object-fit: contain;
  box-shadow: 5px 7px 5px 1px rgba(0, 0, 0, 0.4);
`;

const DescBox = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Desc = styled.p`
  text-align: center;

  &:first-child {
    margin-bottom: 32px;
  }
`;

export default SKnights;
