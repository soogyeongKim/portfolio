import React from "react";
import styled from "styled-components";
import nextrise from "../assets/nextrise.jpeg";

function NextRise(props) {
  return (
    <NextRiseSection>
      <Title>xSync 개별배포 Web : NextRise 2020, seoul</Title>
      <NextRiseContainer>
        <DescBox>
          <Desc>
            개발팀 구성(3) : 프론트엔드 개발 2, 서버 1
            <br />
            <br />
            담당업무 : 프론트엔드 개발, 웹 제작 및 앱 배포
            <br />
            <br />
            프로젝트 참여도 : 70%
          </Desc>
          <Desc>NextRise 2020, seoul의 1:1 MeetUp 기능을 제작하였습니다.</Desc>
          <Desc>
            1:1 MeetUp은 사용자들이 NextRise 행사 시작 전 대기업/스타트업에게
            미팅 요청을 하고 성사가 된 <Green>본인의 미팅 스케줄을 조회</Green>
            하는 기능입니다. 전체 서비스는 로그인 없이 이용이 가능하지만, 1:1
            MeetUp 페이지는 로그인이 필요한 기능이였기에{" "}
            <Green>페이지 진입 시 유저 토큰 유무를 체크</Green>하여 상황에 맞는
            컴포넌트를 노출 시켰습니다.
          </Desc>
          <Desc>
            빠른 시일 내에 화려한 UI를 구현해내야했기에 앞서 사용경험이 있던{" "}
            <Green>
              Chartjs 라이브러리를 사용하여 타임테이블 형태의 화면을 구현
            </Green>
            했습니다. 제공되는 라이브러리와 다르게 사용자에 따라, 날짜에 따라
            y축의 최소값과 최대값이 변경 되는 형태였습니다. api에서 받아오는
            날짜의 시간을 타임스탬프로 변환하여 정수로 계산한 뒤 다시 시간으로
            변환하여 화면에 노출 시키는 작업을 진행했습니다. 조금 번거로운
            작업이기에 라이브러리를 사용하지 않고 직접 화면을 구현 할 수도
            있었지만 프로젝트 기한 내에 많은 효과를 내기 위한 선택이였습니다.
          </Desc>
        </DescBox>
        <BackgroundImg src={nextrise} />
      </NextRiseContainer>
    </NextRiseSection>
  );
}

const NextRiseSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 48px;
`;

const NextRiseContainer = styled.div`
  max-width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundImg = styled.img`
  max-width: 30%;
  max-height: 70%;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  }
`;

const DescBox = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.p`
  @media only screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Green = styled.span`
  background: linear-gradient(
    to top,
    rgba(4, 253, 2, 0.3) 50%,
    transparent 50%
  );
`;

export default NextRise;
