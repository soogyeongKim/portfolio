import React from "react";
import styled from "styled-components";
import { Link, Route, withRouter } from "react-router-dom";
import CoinCode from "./CoinCode";

function CoinExplorer() {
  return (
    <CoinSection>
      <h1>토이 프로젝트 - Coin Explorer : 중첩 라우팅</h1>
      <CoinContainer>
        <DescBox>
          <p>(중첩 라우팅을 사용한 부분만 첨부하였습니다.)</p>
          <p>프로젝트 구조 </p>
          <p>📁 src</p>
          <ul>
            <List>
              📁 Components
              <ul>
                <List>App.js</List>
                <List>
                  <LinkList to="/react/coin">Coin.js</LinkList>
                </List>
                <List>CoinDetail.js</List>
                <List>
                  <LinkList to="/react/markets">Market.js</LinkList>
                </List>
                <List>
                  <LinkList to="/react/header">Header.js</LinkList>
                </List>
                <List>GlobalStyles.js</List>
                <List>Loader.js</List>
                <List>
                  <LinkList to="/react/router">Router.js</LinkList>
                </List>
              </ul>
            </List>
            <List>
              📁 Routes
              <ul>
                <List>
                  📁 Markets.js
                  <ul>
                    <List>MarketsContainer.js</List>
                    <List>MarketsPresenter.js</List>
                    <List>index.js</List>
                  </ul>
                </List>
              </ul>
            </List>
            <List>
              📁 Screens
              <ul>
                <List>
                  📁 CoinDetail.js
                  <ul>
                    <List>CoinDetailContainer.js</List>
                    <List>CoinDetailPresenter.js</List>
                    <List>index.js</List>
                  </ul>
                </List>
                <List>
                  📁 Coins.js
                  <ul>
                    <List>CoinsContainer.js</List>
                    <List>CoinsPresenter.js</List>
                    <List>index.js</List>
                  </ul>
                </List>
              </ul>
            </List>
            <List>api.js</List>
            <List>index.js</List>
          </ul>
        </DescBox>
        <CodeBox>
          <Route path="/react/:id" component={CoinCode} />
        </CodeBox>
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
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const DescBox = styled.div`
  width: auto;
  min-height: 90vh;
`;

const List = styled.li`
  margin-left: 30px;
`;

const LinkList = styled(Link)`
  background-color: rgba(241, 196, 15, 0.5);
`;

const CodeBox = styled.div`
  width: 80%;
`;

export default withRouter(CoinExplorer);
