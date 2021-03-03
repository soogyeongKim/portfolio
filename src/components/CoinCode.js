import React from "react";
import styled from "styled-components";
import Coin from "../assets/coin.png";

const codes = {
  coin: {
    code:
      // eslint-disable-next-line no-template-curly-in-string
      'import React from "react";\nimport PropTypes from "prop-types";\nimport { Link } from "react-router-dom";\nimport styled from "styled-components";\n\nconst Container = styled.div`\n\ttext-decoration: underline;\n\tmargin-bottom: 15px;\n`;\nconst Ranking = styled.span`\n\tfont-weight: 600;\n`;\n\nconst Coin = ({ id, name, symbol, rank }) => (\n\t<Link to={`/coins/${id}`}>\n\t\t<Container>\n\t\t\t<Ranking>#{rank}</Ranking> {name}/{symbol} →\n\t</Container>\n\t</Link>\n);\n\nCoin.propTypes = {\n\tid: PropTypes.string.isRequired,\n\tname: PropTypes.string.isRequired,\n\tsymbol: PropTypes.string.isRequired,\n\trank: PropTypes.number.isRequired\n};\n\nexport default Coin;',
    text: "ㅎㅎ",
    img: Coin,
  },
  header: {
    code:
      // eslint-disable-next-line no-template-curly-in-string
      'import React from "react";\nimport { Link, withRouter } from "react-router-dom";\nimport styled from "styled-components";\n\nconst Header = styled.header`\n\tmargin-bottom: 30px;\n`;\nconst List = styled.ul`\n\tdisplay: flex;\n`;\nconst Item = styled.li`\n\tmargin-right: 20px;\n\ttext-transform: uppercase;\n\tfont-weight: 600;\n\tcolor: ${(props) => (props.selected ? "white" : "black")};\n\tbackground-color: ${(props) => (props.selected ? "#f1c40f" : "white")};\n`;\n\nexport default withRouter(({ location: { pathname } }) => (\n\t<Header>\n\t\t<List>\n\t\t\t<Item selected={pathname === "/"}>\n\t\t\t\t<Link to="/">Prices</Link>\n\t\t\t</Item>\n\t\t\t <Item selected={pathname === "/exchanges"}>\n\t\t\t\t<Link to="/exchanges">Exchanges</Link>\n\t\t\t</Item>\n\t\t\t<Item selected={pathname.includes("/coins")}>\n\t\t\t\t<Link to="/coins">Coins</Link>\n\t\t\t</Item>\n\t\t</List>\n\t</Header>\n));',
    text: "~~",
    img: Coin,
  },
  markets: {
    code:
      'import React from "react";\nimport PropTypes from "prop-types";\nimport styled from "styled-components";\n\nconst Container = styled.div`\n\tmargin-bottom: 10px;\n\ttext-decoration: underline;\n`;\n\nconst Market = ({ exchange_name }) => <Container>{exchange_name}</Container>;\n\nMarket.propTypes = {\n\texchange_id: PropTypes.string.isRequired,\n\texchange_name: PropTypes.string.isRequired\n};\n\nexport default Market;',
    text: "~~",
    img: Coin,
  },
  router: {
    code:
      'import React from "react";\nimport { HashRouter as Router, Route } from "react-router-dom";\nimport Header from "./Header";\nimport Coins from "../Screens/Coins";\nimport Exchanges from "../Screens/Exchanges";\nimport Prices from "../Screens/Prices";\nimport CoinDetail from "../Screens/CoinDetail";\n\nexport default () => {\n\treturn (\n\t\t<Router>\n\t\t\t<Header />\n\t\t\t<Route path="/" exact component={Prices} />\n\t\t\t<Route path="/exchanges" component={Exchanges} />\n\t\t\t<Route path="/coins" exact component={Coins} />\n\t\t\t<Route path="/coins/:id" component={CoinDetail} />\n\t\t</Router>\n\t);\n};',
    img: Coin,
  },
};

function CoinCode({
  match: {
    params: { id },
  },
}) {
  return (
    <CodeBoxContainer>
      <ImgBox>
        <img src={codes[`${id}`].img} alt="실행화면"></img>
      </ImgBox>
      {/* <CodeBox>
        <Highlight language="javascript">{codes[`${id}`].code}</Highlight>
      </CodeBox> */}
      <DescBox>{/* <p>{codes[`${id}`].img}</p> */}</DescBox>
    </CodeBoxContainer>
  );
}

const CodeBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
`;

const ImgBox = styled.div`
  width: 50%;
  height: auto;
  background-color: #151515;
  padding-top: 10px;
  border-radius: 8px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DescBox = styled.div`
  width: 40%;
`;

export default CoinCode;
