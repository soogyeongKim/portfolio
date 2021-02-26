import React from "react";
import styled from "styled-components";

function Contact(props) {
  return (
    <ContactContainer id="Contact">
      <p>https://github.com/soogyeongKim</p>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Contact;
