import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import Highlight from "react-highlight.js";
import superhook from "../assets/superhook.mov";

function UseHooks() {
  const LazyVideo = lazy(() => import("./LazyVideo"));
  return (
    <CoinSection>
      <h1>토이 프로젝트 - Infinite Loading hook, Superhooks! </h1>
      <CoinContainer>
        <CodeBox>
          <Attention>Scroll Me!</Attention>
          <HighlightCode language="javascript">
            {
              'import React, { useEffect, useState } from "react";\nimport { getMovies } from "./api";\nimport uniqBy from "lodash.uniqby";\nimport ReactDOM from "react-dom";\n\nimport "./styles.css";\n\nfunction InfiniteList() {\n\tconst [movies, setMovies] = useState([]);\n\tconst [loading, setLoading] = useState(true);\n\tconst [page, setPage] = useState(1);\n\n\tconst onScroll = () => {\n\t\tif (isBottom()) {\n\t\t\tsetPage(page + 1);\n\t\t}\n\t};\n\n\tconst isBottom = () => {\n\t\treturn (\n\t\t\tdocument.documentElement.scrollTop +\n\t\t\tdocument.documentElement.clientHeight ===\n\t\t\tdocument.documentElement.scrollHeight\n\t\t);\n\t};\n\n\tconst getFristData = async () => {\n\t\ttry {\n\t\t\tconst { data: { data: { movies } } } = await getMovies(page);\n\t\t\tsetMovies(movies);\n\t\t} catch (e) {\n\t\t\tconsole.log(e);\n\t\t} finally {\n\t\t\tsetLoading(false);\n\t\t}\n\t};\n\n\tconst getMoreData = async () => {\n\t\ttry {\n\t\t\tconst {\n\t\t\t\tdata: {\n\t\t\t\t\tdata: { movies: newMovies },\n\t\t\t\t},\n\t\t\t} = await getMovies(page);\n\t\t\tconst uniqueMovies = [...movies, ...newMovies];\n\t\t\tsetMovies(uniqBy(uniqueMovies, "id"));\n\t\t} catch (e) {\n\t\t\tonsole.log(e);\n\t\t}\n\t};\n\n\tuseEffect(() => {\n\t\tgetFristData();\n\t\twindow.addEventListener("scroll", onScroll);\n\t\treturn () => window.removeEventListener("scroll", onScroll);\n\t}, []);\n\tuseEffect(() => {\n\t\tgetMoreData();\n\t\twindow.addEventListener("scroll", onScroll);\n\t\treturn () => window.removeEventListener("scroll", onScroll);\n\t}, [page]);\n\n\treturn { loading, page, movies };\n}\n\nfunction App() {\n\tconst { loading, page, movies } = InfiniteList();\n\treturn (\n\t\t<div className="App">\n\t\t\t<h1>Infinite Movies / Page {page}</h1>\n\t\t\t{loading && <h3>Loading...</h3>}\n\t\t\t {movies.map((movie) => (\n\t\t\t\t  <h3 key={movie.id}>{movie.title}</h3>\n\t\t\t ))}\n\t\t  </div>\n\t);\n}\nconst rootElement = document.getElementById("root");\nReactDOM.render(<App />, rootElement);'
            }
          </HighlightCode>
          <p>(Infinite Loading)</p>
          <p>
            페이지네이션을 사용한 무한 스크롤 기능을 react hook으로
            구현하였습니다. scroll bottom을 체크하여 페이지 수를 늘려줬으며
            페이지가 변할 때 영화 리스트 api를 호출 할 수 있게 dependency를
            설정하였습니다. YTS 에서 제공하는 영화리스트 api를 사용하였습니다.
          </p>
        </CodeBox>
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
              <LazyVideo src={superhook} />
            </VideoContent>
          </Suspense>
          <p>(Superhooks)</p>
          <p>다양한 Web API를 활용하여 8개의 react hook을 만들었습니다.</p>
          <p>
            <a
              href="https://github.com/soogyeongKim/react_2weeks/tree/master/changeHooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 react hook 코드 보러가기
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    margin-bottom: 42px;
  }
`;

const CoinContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CodeBox = styled.div`
  width: 40%;
  min-height: 60vh;
  font-size: 1rem;
  position: relative;

  & > p {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const HighlightCode = styled(Highlight)`
  & > code {
    height: calc(60vh - 1rem);
  }

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const VideoBox = styled.div`
  width: 40%;
  height: 60vh;

  & > p {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    background-color: transparent;
  }
`;

const VideoContent = styled.div`
  width: 100%;
  height: 60vh;
`;

const VideoLoading = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #cca498;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > p {
    color: #fff;
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
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

const jello = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

const Attention = styled.p`
  position: absolute;
  top: -32px;
  left: 0;
  animation: ${jello} 5s infinite both;
`;
export default UseHooks;
