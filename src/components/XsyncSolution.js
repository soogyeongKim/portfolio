import React from "react";
import styled from "styled-components";
import analytics from "../assets/analytics.png";

function XsyncSolution(props) {
  return (
    <XsyncSolutionSection>
      <Title>xSync Admin Web : 랜딩페이지, 통계 조회, 문자 발송</Title>
      <XsyncSolutionContainer>
        <ImgBox>
          <Desc>
            개발팀 구성(2) : 프론트엔드 개발 1, 서버 1 / 담당업무 :
            <Red>프론트엔드 개발</Red> / 프로젝트 참여도 : 100%
          </Desc>
          <Desc>
            1. 실사용자들이 접속하는 행사 초대장(티켓)의 의미를 담고 있는{" "}
            <Red>랜딩 페이지</Red>,
            <br />
            2. 클라이언트들에게 제공 되는 실사용자들의{" "}
            <Red>데이터 통계 자료 조회 페이지</Red>,
            <br />
            3. 엑씽크 사내의 비즈니스팀을 위해 제공 되는{" "}
            <Red>문자 발송 페이지</Red>를 만들었습니다.
          </Desc>
          <BackgroundImg src={analytics} />
        </ImgBox>
        <DescBox>
          <Desc>
            Vue.js 의 Axios 라이브러리를 통해 api 연결을 하였으며 모든 데이터는
            store 에 저장하여 관리하였습니다. 또한 모든 페이지는{" "}
            <Red>반응형으로 제작</Red>하여 모바일 화면에서도 문제 없이 확인 할
            수 있도록 만들었습니다.
          </Desc>
          <Desc>
            - 랜딩페이지 <br />
            랜딩 페이지 기능은 사용자들에게 충분한 의미를 담고 있는 UI/UX를
            전달하고자 하였습니다. 티켓의 의미를 확실하게 하고자 디자이너와의
            회의를 통해 border를 찢어지는 티켓 형태로 표현했습니다.
          </Desc>
          <Desc>
            - 데이터 통계 자료 조회 페이지 <br />
            사용자들의 데이터 수집이 곧 자산이라고 생각하여{" "}
            <Red>기획 회의부터 참여</Red>하였습니다. 비즈니스팀과 함께 실제
            유의미한 데이터가 무엇일지 생각해보고 당장 적용이 가능한 메뉴 클릭
            수, 게시글 조회 수 등을 우선 제공하였습니다. 차후에는 사용자들의
            연령대, 성별 등의 데이터를 수집할 수 있는 방법에 대해
            고민하였습니다. <Red>Chartjs 라이브러리를 사용</Red>하여 그래프를
            나타냈으며 기능 제작 시에는 프론트에서 효율적으로 데이터를 노출시킬
            수 있는 <Red>결과 값 형태를 서버개발자에게 직접 요청</Red>하기도
            하였습니다.
          </Desc>
          <Desc>
            - 문자 발송 페이지 <br />
            실사용자들의 이름과 연락처를 저장한 엑셀 파일을 업로드하고 메세지를
            입력하면 해당 이벤트의 사용자들에게 문자로 안내가 가능한 페이지
            입니다. 비즈니스팀이 빠르게 업무에 대응 할 수 있도록 심플한 UI/UX와
            다양한 메세지를 노출하려 노력했습니다. 그 예로 문자 발송 실패 시{" "}
            <Red>
              다양한 오류 케이스를 비즈니스팀에서 이해하기 쉬운 용어들을 사용해
              가감 없이 전부 노출
            </Red>{" "}
            시켰습니다.
          </Desc>
        </DescBox>
      </XsyncSolutionContainer>
    </XsyncSolutionSection>
  );
}

const XsyncSolutionSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6eaef;
`;

const Title = styled.h1`
  margin-bottom: 48px;
`;

const XsyncSolutionContainer = styled.div`
  max-width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundImg = styled.img`
  width: 80%;

  @media only screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

const DescBox = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.p`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Red = styled.span`
  background: linear-gradient(
    to top,
    rgba(232, 53, 36, 0.3) 50%,
    transparent 50%
  );
`;

export default XsyncSolution;
