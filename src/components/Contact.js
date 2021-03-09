import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import sooCard from "../assets/soo-card.jpeg";

function Contact(props) {
  const LazyImage = lazy(() => import("./LazyImage"));
  return (
    <ContactSection id="More">
      <Suspense fallback={<CardImgBox />}>
        <CardImgBox>
          <LazyImage src={sooCard} name="cardImg" />
        </CardImgBox>
      </Suspense>
      <ContactContainer>
        <h1>제 이야기가 더 궁금하신가요?</h1>
        <a
          href="https://www.notion.so/Kim-SooGyeong-93e53e07cc8b4085ab2327811a8241d9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkP>
            <Bar>이력서 구경하러가기</Bar>
          </LinkP>
        </a>
        <a
          href="https://github.com/soogyeongKim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkP>
            <Bar>Github 구경하러가기</Bar>
          </LinkP>
        </a>
      </ContactContainer>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  min-width: 90vw;
  min-height: 100vh;
  display: flex;
  padding: 0 5vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cca498;

  @media only screen and (max-width: 768px) {
    min-height: calc(100vh - 80px);
    padding-top: 80px;
  }
`;

const CardImgBox = styled.div`
  width: 20%;
  height: 20%;
  margin-bottom: 80px;
  border-radius: 50%;
  background-color: #939393;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  & > h1 {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Bar = styled.span`
  transition: all 0.2s ease-in-out;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    bottom: -10px;
    height: 2px;
    margin: 5px 0 0;
    transition: $animate;
    transition-duration: 0.75s;
    opacity: 0;
    background-color: #000;
  }
`;

const LinkP = styled.p`
  margin-bottom: 32px;

  &:hover {
    & > ${Bar} {
      &:before {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

export default Contact;
