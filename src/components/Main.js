import React from "react";
import styled from "styled-components";
import mainImg from "../assets/soo.jpg";

function Main(props) {
  return (
    <MainContainer id="Home">
      <ProfileImg src={mainImg} />
      <ProfileSubText>
        수경스럽다 : [형용사] 업무를 수행하는 모양새가 똑부러지고 믿음직하다.
      </ProfileSubText>
      <ProfileTitle>
        <h1>안녕하세요.</h1>
        <h1>빠른 변화를 두려워하지 않는 개발자 김수경입니다.</h1>
      </ProfileTitle>
      <ProfileText>
        코드를 옮겨적는 개발자가 아닌 가장 효율적인 방식으로 사용자를 움직이는
        프로덕트를 만드는 개발자가 되고싶습니다.
        <br />
        <br /> 그 과정에 있어서 우선순위는 프로젝트의 마무리라고 생각합니다.
        <br />
        프로젝트를 마무리 하고 그 속에서 본인이 업무를 끝내는데만 급급하지는
        않았는지, 프로젝트를 진행하는 동안 무엇을 얻었는지 혹은 무엇을 잃었는지
        생각합니다.
        <br />
        스스로의 평가를 토대로 발전하는 것을 좋아합니다.
      </ProfileText>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-width: 90vw;
  min-height: 100vh;
  height: 100%;
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cca498;
  text-align: center;

  @media only screen and (max-width: 768px) {
    min-height: calc(100vh - 45px);
    padding-top: 80px;
  }
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

const ProfileTitle = styled.div`
  margin-bottom: 50px;
  display: flex;

  & > h1:first-child {
    margin-right: 16px;

    @media only screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileSubText = styled.p`
  font-size: 1rem;
  margin-bottom: 50px;
`;

const ProfileText = styled.p`
  margin-bottom: 50px;
`;

export default Main;
