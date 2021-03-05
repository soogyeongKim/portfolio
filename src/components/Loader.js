import React from "react";
import styled, { keyframes } from "styled-components";

function Loader(props) {
  return (
    <LoaderContainer bgColor={props.bgColor}>
      <Loader4></Loader4>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  transition: all 0.2s ease;

  & > p {
    color: #777;
    font-weight: 300;
    position: absolute;
    font-size: 20px;
    width: 100%;
    height: 25px;
    text-align: center;
    bottom: 0px;
    margin: 0;
    top: 160px;
    background-color: #fff;
    opacity: 0;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
`;

const loader4 = keyframes`  
    0%{width: 0px;}
    70%{width: 100%; opacity: 1;}
    90%{opacity: 0; width: 100%;}
    100%{opacity: 0;width: 0px;}
`;

const Loader4 = styled.div`
  position: absolute;
  width: 150px;
  height: 20px;

  top: 45%;
  top: -webkit-calc(50% - 10px);
  top: calc(50% - 10px);
  left: 25%;
  left: -webkit-calc(50% - 75px);
  left: calc(50% - 75px);

  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-animation: ${loader4} 10s ease-in-out infinite;
    animation: ${loader4} 10s ease-in-out infinite;
  }

  &:after {
    content: "LOADING ...";
    color: #fff;
    font-weight: 200;
    font-size: 16px;
    position: absolute;
    width: 100%;
    height: 20px;
    line-height: 20px;
    left: 0;
    top: 0;
  }
`;

export default Loader;
