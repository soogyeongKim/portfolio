import React from "react";
import styled from "styled-components";
import BuskingTownBg from "../assets/buskingtown@2x.png";
import BuskingTownIcon from "../assets/ico-buskingtown@2x.png";

function BuskingTown(props) {
  return (
    <BTSection>
      <IconImg src={BuskingTownIcon}></IconImg>
      <h1>개인 프로젝트 – ‘BuskingTown’ 버스킹 플랫폼 어플리케이션</h1>
      <DescBox>
        <Desc>
          버스커 채널을 설립하여 홍보하고 연습실 및 콘서트 장소 대여, 멤버관리
          등의 서비스를 제공하여 버스커들의 편의를 도모하였습니다.
          <br />
          일반 회원은 버스커들이 언제 어디서 공연을 하는지 확인하거나 그들을
          서포트 하는 방식으로 우리 어플리케이션을 이용 할 수 있습니다.
        </Desc>
        <Desc>팀 구성(4) : 백엔드 개발1, 프론트 개발3</Desc>
        <Desc>개발 환경 : 안드로이드 스튜디오 , 파이참 </Desc>
        <Desc>
          <span style={{ float: "left" }}>
            담당 업무 : <span style={{ color: "#FFCF35" }}> 백엔드 개발</span>
            , 안드로이드 프론트 개발, PM
            <br />
            어플리케이션 주 기능 기획
            <br />
            ERD 작성/ 기획서, WBS, 사용자 시나리오 등 총괄 관리
            <br />
            Python Django-rest framework를 활용하여 서버 개발
          </span>
        </Desc>
        <LongDesc>
          <RightDesc>
            <p>
              한양여자대학교 창업경진대회 우수상
              <br />
              한양여자대학교 정보경영과 졸업작품전 은상
              <br />
              한양여자대학교 캡스톤 디자인 공모전 장려상
            </p>
          </RightDesc>
          <p>
            그 동안의 모든 경험을 살려 안드로이드 프론트 개발에도 참여 하였으며,
            수업 시간에 배운 MVC 패턴에 대해 숙지하고
            <br />
            Django에서 제공하는 rest framework 라이브러리를 활용하여 객체
            직렬화를 통해 API를 구현 해냈습니다.
            <br />
            안드로이드 클라이언트에서는 retrofit 으로 http 통신을 하여 서버와
            클라이언트 간의 데이터 통신을 구현하였습니다.
            <br />
            역시 처음 접해보는 서버 개발이었지만 유튜브와 여러 API문서들을 적극
            활용하여 회원가입부터 예약, 랭킹 등의 API를 구현할 수 있었습니다.
          </p>
        </LongDesc>
      </DescBox>
    </BTSection>
  );
}

const BTSection = styled.section`
  width: 100vw;
  min-height: 95vh;
  padding-top: 5vh;
  background-image: url(${BuskingTownBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;

  & > h1 {
    margin-bottom: 20px;
    padding-left: 20px;
  }
`;

const DescBox = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconImg = styled.img`
  width: 250px;
  height: 273x;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Desc = styled.p`
  margin-bottom: 40px;
  padding: 0 20px;
`;

const RightDesc = styled.div`
  position: absolute;
  right: 0;
  bottom: 110%;
  text-align: right;
  padding: 0 20px;
  color: white;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const LongDesc = styled.div`
  line-height: 2rem;
  word-break: keep-all;
  height: 25%;
  padding: 5px 20px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  position: relative;
`;

export default BuskingTown;
