import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import Coin from "../assets/coin.mov";

function CoinExplorer() {
  const LazyVideo = lazy(() => import("./LazyVideo"));
  return (
    <CoinSection>
      <h1>
        토이 프로젝트 - Coin Explorer : 중첩 라우팅, Container Presenter 패턴,
        함수형 컴포넌트 변환
      </h1>
      <p>
        (중첩 라우팅,Container Presenter 패턴을 사용한 부분만 작성하였습니다.)
      </p>
      <CoinContainer>
        <DescBox>
          <p>프로젝트 구조 </p>
          <p>📁&nbsp;&nbsp;src</p>
          <ul>
            <List>
              📁&nbsp;&nbsp;Components
              <ul>
                <List>App.js</List>
                <List>Coin.js</List>
                <List>CoinDetail.js</List>
                <List>Market.js</List>
                <List>Header.js</List>
                <List>Loader.js</List>
                <List>Router.js</List>
              </ul>
            </List>
            <List>
              📁&nbsp;&nbsp;Routes
              <ul>
                <List>
                  📁&nbsp;&nbsp;Markets
                  <ul>
                    <List>MarketsContainer.js</List>
                    <List>MarketsPresenter.js</List>
                    <List>index.js</List>
                  </ul>
                </List>
              </ul>
            </List>
            <List>
              📁&nbsp;&nbsp;Screens
              <ul>
                <List>
                  📁&nbsp;&nbsp;CoinDetail
                  <ul>
                    <List>CoinDetailContainer.js</List>
                    <List>CoinDetailPresenter.js</List>
                    <List>index.js</List>
                  </ul>
                </List>
              </ul>
            </List>
            <List>api.js</List>
            <List>index.js</List>
          </ul>
        </DescBox>
        <VideoBox>
          <Suspense
            fallback={
              <VideoLoading>
                <Ripple>
                  <div />
                  <div />
                </Ripple>
                <p>Loading..</p>
              </VideoLoading>
            }
          >
            <VideoContent>
              <LazyVideo src={Coin} />
            </VideoContent>
          </Suspense>
          <p>
            <Yellow>암호화폐 관련 정보를 나타내는 React 토이 프로젝트</Yellow>{" "}
            입니다. coinpaprika api를 이용하였습니다. react router 의 match url
            값을 가져와 중첩라우팅을 구현했습니다. react의 Container Presenter
            디자인 패턴을 사용하여 데이터 처리와 데이터 출력화면을 나누었습니다.
            class component 사용법을 숙지 후 react hook을 이용하여 funtion
            component로 리팩토링 하는 연습도 진행하였습니다.
          </p>
          <p>
            <a
              href="https://github.com/soogyeongKim/react_2weeks/tree/master/nested-routing"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 nested-routing 코드 보러가기
            </a>
          </p>
          <p>
            <a
              href="https://github.com/soogyeongKim/react_2weeks/tree/master/nested-routing"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 함수형 컴포넌트로 리팩토링한 코드 보러가기
            </a>
          </p>
        </VideoBox>
      </CoinContainer>
    </CoinSection>
  );
}

const CoinSection = styled.section`
  width: calc(100vw - 40px);
  min-height: 90vh;
  padding: 5vh 20px;

  & > h1 {
    margin-bottom: 20px;
  }
`;

const CoinContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const DescBox = styled.div`
  width: auto;
  min-height: 80vh;
`;

const List = styled.li`
  margin-left: 30px;
`;

const Yellow = styled.span`
  background-color: rgba(241, 196, 15, 0.5);
`;

const VideoBox = styled.div`
  width: 60%;
  margin: 0 auto;

  & > p {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const VideoContent = styled.div`
  width: 100%;
  height: 60vh;
  border-bottom: 1px solid #10011a;
  margin-bottom: 20px;
`;

const VideoLoading = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > p {
    color: #555;
    margin-top: 12px;
  }
`;

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    position: absolute;
    border: 4px solid #555;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
export default CoinExplorer;
