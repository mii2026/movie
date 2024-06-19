const confirmBirthday = (birthday) => {
  const regBirthday = /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;
  return regBirthday.test(birthday);
}

const confirmGender = (gender) => {
  const regGender = /^[1-4]$/;
  return regGender.test(gender);
}

const confirmEmail = (email) => {
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regEmail.test(email);
}

const confirmPw = (pw) => {
  const regNum = /[0-9]/;
  const regEng = /[a-zA-Z]/;
  const regSpc = /[~!@#$%^&*()_+|<>?:{}]/;

  if(pw.length < 8 || !regNum.test(pw) || !regEng.test(pw) || !regSpc.test(pw))
    return false;
  return true;
}

export { confirmBirthday, confirmGender, confirmEmail, confirmPw };