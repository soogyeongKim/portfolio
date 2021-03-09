import React from "react";
import styled from "styled-components";

const LazyVideo = (props) => {
  return (
    <Video
      src={props.src}
      alt="실행화면"
      autoPlay
      muted
      loop
      playsInline
    ></Video>
  );
};
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default LazyVideo;
