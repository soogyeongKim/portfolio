import React from "react";
import styled from "styled-components";

function Contact(props) {
  // const { values, errors, submitting, handleChange, handleSubmit } = useForm({
  //   initialValues: { name: "", email: "", contents: "" },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     alert(JSON.stringify(values, null, 2));
  //   },
  //   validate,
  // });
  return (
    <ContactSection id="Contact">
      <ContactContainer>
        <h1>저의 이야기가 더 궁금하신가요?</h1>
        <a
          href="https://github.com/soogyeongKim/react_2weeks/tree/master/changeHooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkP>
            <Bar>이력서(자기소개서) 구경하러가기</Bar>
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
        {/* <p>Mail 보내기</p>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={errors.name && "errorInput"}
          />
          {errors.name && <span className="errorMessage">{errors.name}</span>}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && "errorInput"}
            placeholder="email"
          />
          {errors.email && <span className="errorMessage">{errors.email}</span>}
          <div>
            <textarea
              name="contents"
              value={values.contents}
              onChange={handleChange}
              className={errors.contents && "errorInput"}
            />
            {errors.contents && (
              <span className="errorMessage">{errors.contents}</span>
            )}
          </div>
          <button type="submit" disabled={submitting}>
            보내기
          </button>
        </form> */}
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
