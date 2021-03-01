import React from "react";
import styled from "styled-components";
import BsideImg from "../assets/buskingtown-side@2x.png";

function BuskingTownServer(props) {
  return (
    <BTSection>
      <DescBox>
        <h1>백엔드 구현</h1>
        <Desc>
          무분별한 버스커의 가입을 막기 위해 최소한의 정보를 받아 관리자의
          버스커 승인 후 채널이 생성 되며 각종 공연 일정 및 연습실 예약 등의
          서비스를 이용 할 수 있습니다.
        </Desc>
        <Border />
        <Desc>
          주 API 목록
          <br />
          -랭킹 API ( 게시글의 좋아요 수 + 팔로우하는 사람의 수 + 후원 받은 코인
          수 )<br />
          -라이브 중인 공연 위치 안내 API ( 네이버 지도 API를 이용해 공연 중인
          위치 핀 세팅 )<br />
          -연습실 및 콘서트 장소 예약, 길거리 공연 예약 API
          <br />
          -버스커 회원에게 코인을 후원 하는 API
          <br />
          -버스커 회원 팔로우/언팔로우 API
        </Desc>
        <Border />
        <Desc>
          무분별한 버스커의 가입을 막기 위해 최소한의 정보를 받아 관리자의
          버스커 승인 후 채널이 생성 되며 각종 공연 일정 및 연습실 예약 등의
          서비스를 이용 할 수 있습니다.
        </Desc>
      </DescBox>
      <DescImg src={BsideImg} />
    </BTSection>
  );
}

const BTSection = styled.section`
  width: 100vw;
  min-height: 95vh;
  padding-top: 5vh;
  display: flex;
  justify-content: space-between;
`;

const DescBox = styled.div`
  width: 50%;
  height: 95%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 20px;
  }
`;

const Desc = styled.p`
  margin-bottom: 40px;
`;

const DescImg = styled.img`
  width: 50%;
  max-height: 90vh;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Border = styled.div`
  border: 1px solid #d9d9d9;
  margin-bottom: 40px;
`;
export default BuskingTownServer;
