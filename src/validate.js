export default function validate({ name, email, contents }) {
  const errors = {};

  if (!name) {
    errors.name = "이름을 입력해주세요.";
  }

  if (!email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "입력된 이메일이 유효하지 않습니다.";
  }

  if (!contents) {
    errors.contents = "내용을 입력해주세요.";
  }

  return errors;
}
