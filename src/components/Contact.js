import React from "react";
import styled from "styled-components";

function Contact(props) {
  return (
    <ContactSection id="Contact">
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
    justify-content: start;
    align-items: start;
  }
`;

const ContactContainer = styled.div`
  & > h1 {
    margin-bottom: 50px;
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
