import React from "react";
import styled from "styled-components";
import ASideimg from "../assets/string@2x.png";
import imgrounding from "../assets/img-rounding@2x.png";
import viewpager from "../assets/viewpager@2x.png";
import chatting from "../assets/chatting@2x.png";

import useWindowSize from "../hooks/useWindowSize";

const cards = [
  {
    title: "이미지 라운딩",
    desc:
      "Picasso 라이브러리를 사용하여\n배치 되는 이미지들을 원형 및 라운딩 처리",
    img: imgrounding,
  },
  {
    title: "뷰페이저",
    desc: "이미지 별로 점수를 매기면\n자동으로 다음 이미지로 넘어가는 효과",
    img: viewpager,
  },
  {
    title: "채팅",
    desc:
      "사용자 메시지의 공백 체크 및\n리스트뷰와 나인패치를 활용하여 채팅창 구현",
    img: chatting,
  },
];

function String() {
  const size = useWindowSize();
  return (
    <>
      <SSection>
        <DescBox
          style={{
            marginLeft: "20px",
            width:
              size.width > size.height
                ? `${size.width * 0.4}px`
                : `${size.width * 0.8}px`,
          }}
        >
          <h1>개인 프로젝트 – ‘String’ 소개팅 어플리케이션</h1>
          <Desc>
            다른 소개팅 어플리케이션들과 차별점을 두기 위해 20대 회원만 받는
            방식을 선택했으며, 실사용자가 될 친구들에게 끊임 없는 인터뷰를
            통하여
            <br />
            <span style={{ color: "#D77D33" }}>
              여성의 나이와 남성의 군 제대 여부
            </span>
            를 주 매칭 포인트로 잡아 API를 구성하였습니다.
          </Desc>
          <Desc>
            팀 구성(6) : 기획1, 안드로이드 개발2, IOS개발 1, 백엔드 개발2
          </Desc>
          <Desc>개발환경 : 안드로이드 스튜디오</Desc>
          <Desc>
            담당 업무 :
            <span style={{ color: "#D77D33" }}> 안드로이드 프론트 개발</span>
            <br />
            프로토타입 기획 <br />
            UI/UX 디자인에 따라 모든 레이아웃 구현
            <br />
            사용자 시나리오에 맞는 이벤트 구현
          </Desc>
          <Desc>
            처음 접해보는 안드로이드 개발이어서 화면 구성 단을 코드로 만드는
            것부터 시작하였지만 프로젝트 중반부부터는{" "}
            <span style={{ color: "#D77D33" }}>
              서버에서 전송된 데이터를 가지고 화면을 세팅 하는 일
            </span>{" "}
            까지 맡을 수 있었습니다. 또한, 팀원들과 원활한 소통을 위해 개발에만
            몰두하지 않고 목업 디자인, 기획에도 모두 참여하여 협업에 대해
            이해하는 경험을 할 수 있었습니다.
          </Desc>
        </DescBox>
      </SSection>
      <SDSection>
        <SDescBox>
          <p>
            디자이너에게 넘겨 받은 화면 그대로 표현하려고 최대한 노력했던 부분들
            입니다. 1dp의 오차도 나지 않게 디자이너에게 끊임 없이 확인 받으며
            작업했습니다.
          </p>
        </SDescBox>
        <CardBox>
          {cards.map((card, i) => (
            <Card key={`card${i}`}>
              <span style={{ marginBottom: "0.625rem" }}>
                <CardTitle>{card.title}</CardTitle>
              </span>

              {card.desc.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
              <CardImg src={card.img}></CardImg>
            </Card>
          ))}
        </CardBox>
      </SDSection>
    </>
  );
}

const SSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding-top: 5vh;
  position: relative;
  z-index: 1;

  &:after {
    background-image: url(${ASideimg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;

    @media only screen and (max-width: 768px) {
      opacity: 0.3 !important;
      filter: alpha(opacity=30);
    }
  }
`;

const DescBox = styled.div`
  max-width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    margin-bottom: 20px;
  }
`;

const Desc = styled.p`
  margin-bottom: 40px;
`;

const SDSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #f5f3f6;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SDescBox = styled.div`
  min-height: 200px;
  padding: 0 20px;
  & > p {
    position: relative;
    top: 100px;
  }
`;

const CardBox = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 430px;
  max-width: 100vw;
  max-height: 656px;
  word-break: keep-all;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
`;

const CardTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  border-bottom: 3px solid #ffcf35;
  display: inline;
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default String;
