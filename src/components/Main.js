import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";

import mainImg from "../assets/soo.jpg";

function Main(props) {
  const LazyImage = lazy(() => import("./LazyImage"));
  return (
    <MainSection id="Home">
      <MainContainer>
        <Suspense fallback={<ProfileImg />}>
          <ProfileImg>
            <LazyImage src={mainImg} name="profileImg" />
          </ProfileImg>
        </Suspense>
        <ProfileSubText>
          수경스럽다 : [형용사] 업무를 수행하는 모양새가 똑부러지고 믿음직하다.
        </ProfileSubText>
        <ProfileTitle>
          <h1>안녕하세요.</h1>
          <h1>빠른 변화를 두려워하지 않는 개발자 김수경입니다.</h1>
        </ProfileTitle>
        <ProfileText>
          코드를 옮겨적는 개발자가 아닌 가장 효율적인 방식으로 사용자를 움직이는
          프로덕트를 만드는 개발자가 되고싶습니다.
          <br />
          <br /> 그 과정에 있어서 우선순위는 프로젝트의 마무리라고 생각합니다.
          <br />
          프로젝트를 마무리 하고 그 속에서 본인이 업무를 끝내는데만 급급하지는
          않았는지, 프로젝트를 진행하는 동안 무엇을 얻었는지 혹은 무엇을
          잃었는지 생각합니다.
          <br />
          스스로의 평가를 토대로 발전하는 것을 좋아합니다.
        </ProfileText>
      </MainContainer>
      <BoxContainer>
        <StoryBox>
          <p>
            💪&nbsp;&nbsp;앞장서서
            <br />
            &nbsp;알고 있는 정보를 나누어주는 것을 좋아합니다. 학부생 시절 개발
            관련 세미나 참석 후에 내용을 친구들에게 전달해주고 싶다는 생각을
            하였고, 교수님께 발표자리 마련을 요청했습니다. 흔쾌히 수락해주신
            덕분에 다양한 세미나에 참석 후에는 알게 된 정보를 토대로 자료를
            정리하여 발표 수업을 진행하였습니다.
            <br />
            <br />
            &nbsp;불필요한 일을 줄이는 것을 좋아합니다. 학부생 시절 약 한달 간의
            시간이 소요 되는 한양여자대학교의 전체 DB 데이터를 한줄 한줄
            작성해야하는 작업을 진행해야 했던 적이 있습니다. 교수,학생,직원
            데이터를 한명씩 입력하는 것은 상당히 불필요한 작업이라고 생각하여
            Python으로 자동화 프로그램을 만들어 일주일만에 과제를 끝낼 수
            있었습니다. 만든 프로그램을 혼자서만 사용하지 않고 학급 친구들과
            함께 사용했습니다.
          </p>
        </StoryBox>
        <StoryBox>
          <p>
            ⭐️&nbsp;&nbsp;새로운 도전
            <br />
            &nbsp;안드로이드 개발자로 취업하였지만 안드로이드 업무만 진행하지
            않고 관심 있는 분야의 직무를 경험하고싶어 iOS앱 배포 업무를
            요청드렸습니다. iOS 앱 배포 업무에 빠르게 적응하여 후에는 UI 버그 등
            가벼운 이슈는 직접 해결할 수 있었습니다. 이 전 직장의 모바일
            사업팀이 철수 한 이후에도 CTO님께서 성장가능성을 알아봐주시고는 웹
            개발 포지션을 제안하였고 프론트엔드 개발자로 포지션을 이동하여
            실무를 진행할 수 있었습니다.
            <br />
            <br />
            &nbsp;사고를 넓혀 좋은 프로덕트를 생산하고 싶습니다. 배우는 것을
            좋아합니다. 독일어 학습, 드럼, 영어 학습, 영상 편집, 독서 모임 등
            꾸준히가 아니더라도 다양한 경험을 하기 위해 노력합니다.
          </p>
        </StoryBox>
        <StoryBox>
          <p>
            🤞&nbsp;&nbsp;더 나은 삶
            <br />
            &nbsp;개발자라는 직업을 가지고 제 삶 만을 영위하고자 하는 것이 아닌
            보다 나은 세상을 위해 프로그래밍을 하고 싶다는 생각을 늘 가지고
            있었기에 JA 코리아에서 주관한 장애인 분들과 함께 하는
            ‘YouthSparkLive’ 에도 깊은 관심을 가지고 참여했습니다. 장애인 분들과
            함께 조를 이루어 코드를 작성하고 아두이노를 사용하여 교육생들과
            게임을 진행하였습니다.
            <br />
            <br />
            &nbsp;건강한 몸, 건강한 정신을 만드는데 노력합니다. 바쁜 직장 생활을
            보내며 불규칙한 생활 습관을 갖게 되어 불면증을 겪은 적이 있습니다.
            규칙적인 생활을 찾기 위해 운동을 접하였습니다. 수영으로 스트레스
            푸는 것을 가장 좋아합니다. 날씨가 좋으면 언제든 등산을 갈 수 있는
            체력을 가지고 있습니다.
          </p>
        </StoryBox>
      </BoxContainer>
    </MainSection>
  );
}

const slideIn = keyframes`
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

const MainSection = styled.div`
  min-width: 90vw;
  min-height: 100vh;
  padding: 120px 5vw 0 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cca498;

  @media only screen and (max-width: 768px) {
    min-height: calc(100vh - 45px);
    padding-top: 80px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${slideIn} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 60px;
  border-radius: 50%;
  background-color: #939393;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const ProfileTitle = styled.div`
  margin-bottom: 50px;
  display: flex;

  & > h1:first-child {
    margin-right: 16px;

    @media only screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileSubText = styled.p`
  font-size: 1rem;
  margin-bottom: 50px;
`;

const ProfileText = styled.p`
  margin-bottom: 50px;
`;

const BoxContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 80px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StoryBox = styled.div`
  width: 280px;
  margin: 20px;
  padding: 20px 15px;
  border-radius: 16px;
  border: 3px solid #444;
  box-shadow: 2px 3px 8px 1px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export default Main;
