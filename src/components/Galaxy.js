import React from "react";
import styled from "styled-components";
import galaxy from "../assets/galaxy.png";

function Xsync(props) {
  return (
    <XsyncAppSection>
      <Title>
        xSync 개별배포 앱 : <Neon>Galaxy Note 10 Fan Party </Neon>(Android)
      </Title>
      <XsyncAppContainer>
        <Desc>
          개발팀 구성(3)
          <br />
          안드로이드 개발 2, 서버 1
          <br />
          <br />
          담당업무
          <br />
          <Neon>안드로이드 개발, 앱 제작 및 배포</Neon>
          <br />
          <br />
          프로젝트 참여도
          <br />
          50%
        </Desc>
        <Img src={galaxy}></Img>
        <Desc style={{ textAlign: "left" }}>
          갤럭시 팬파티 어플리케이션은 갤럭시 팬들을 위해 열리는 행사에
          사용되었습니다. 어플리케이션을 통해 행사에 관련된 정보제공을 하며 서버
          제어를 통해 안드로이드와 소켓 통신하여 실시간으로 사용자들이 퀴즈에
          참여할 수 있는 기능이 있습니다.
          <br />
          <br />
          <Neon>
            많은 참가자들이 동시에 접속해야 하기 때문에 앱을 최대한 가볍게
            만들고자 하였습니다.
          </Neon>
          기존에 존재하던 서버 통신을 최대한 줄이기 위해 서버에서 받아오던
          이미지, 폰트 컬러, 컨텐츠 등을 하드코딩 하는 풀 커스텀을
          진행하였습니다.
        </Desc>
      </XsyncAppContainer>
    </XsyncAppSection>
  );
}

const XsyncAppSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #10011a;
`;

const XsyncAppContainer = styled.div`
  width: 90%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Desc = styled.p`
  width: 30%;
  margin: 0 20px;
  line-height: 2rem;
  color: #fff;
  word-break: keep-all;
  text-align: center;

  &:first-child {
    width: 20%;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 20px 0;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const Img = styled.img`
  width: 30%;
`;

const Neon = styled.span`
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
    0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
`;

export default Xsync;
