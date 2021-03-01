import React from "react";
import styled from "styled-components";
import buskingTownBg2 from "../assets/buskingtownBg2@2x.png";
import erd from "../assets/db-erd@2x.png";

function BuskingTownDB(props) {
  return (
    <BTSection>
      <BTContainer>
        <h1>DB 설계</h1>
        <DescBox>
          <Desc>
            서버 개발이 처음이었기 때문에
            <span>DB설계와 서버 코드가 수정 될 가능성을 모두 염두</span>
            하여 가장 객체 지향적으로 설계 하려 노력했습니다.
            <br />
            <br />
            <span>데이터 검색 비용을 최소한으로 만들기 위해 고민</span>
            했습니다. 그 예시로 버스커가 팀으로 이루어져 있을 경우 별도의 팀
            테이블을 생성 할지에 대해 고민 하였으나 기존의 버스커 테이블에
            busker_type이라는 속성을 주어 별도의 테이블을 생성 하지 않고도 팀
            활동을 구분 할 수 있게 하였습니다.
            <br />
            <br />
            <span>DB의 무결성을 유지</span>
            하기 위하여 클라이언트 측에서도 데이터 유형을 검사하고 예외사항에
            대비해 서버 측에서 응답을 하지 못하도록 하였습니다.
            <br />
            <br /> 또한, 이들의 결과 값을 도출해내기 위해
            <span>Django의 ORM을 활용</span>
            하였기에 SQL 없이도 쿼리셋을 반환하여 결과 값 데이터를 얻을 수 있어
            개발의 생산성을 높일 수 있었습니다.
          </Desc>
          <DescImg src={erd}></DescImg>
        </DescBox>
      </BTContainer>
    </BTSection>
  );
}

const BTSection = styled.section`
  width: 100vw;
  min-height: 95vh;
  padding-top: 5vh;
  background-image: url(${buskingTownBg2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BTContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    margin-bottom: 40px;
    padding-left: 20px;
  }
`;

const DescBox = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Desc = styled.p`
  width: 35%;
  margin-bottom: 40px;

  & > span {
    color: #352872;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const DescImg = styled.img`
  width: 60%;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default BuskingTownDB;
