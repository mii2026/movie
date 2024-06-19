import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmBirthday, confirmGender, confirmEmail } from "../../Component/Confirm";
import "../../Style/Global.css";
import "../../Style/Join.css";

const VerificationInfo = () => {
  // 사용자 정보
  const [username, setName] = useState("");
  const[birthday, setBirthday] = useState("");
  const[gender, setGender] = useState("");
  const[email, setEmail] = useState("");
  
  // 기타
  const navigate = useNavigate();

  const setUserName = event => {
    const value = event.target.value;
    const not = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;
    
    setName(value.replace(not, ""));
  }

  const setUserBirthday = event => {
    const value = event.target.value;
    const not = /[^0-9]/g;

    setBirthday(value.replace(not, ""));
  }

  const setUserGender = event => {
    const value = event.target.value;
    const not = /[^0-9]/g;

    setGender(value.replace(not, ""));
  }

  const setUserEmail = event => {
    setEmail(event.target.value);
  }

  const handleSendClick = () => {
    if(!confirmBirthday(birthday)){
      alert("생년월일이 유효하지 않습니다.")
    }
    else if(!confirmGender(gender)){
      alert("성별이 유효하지 않습니다.")
    }
    else if(!confirmEmail(email)){
      alert("이메일 형식이 잘못되었습니다.")
    }
    else{
      navigate('/join/verify-email', {
        state: {
          username: username,
          birthday: birthday,
          email: email
        }
      })
    }
  }

  return (
    <>
      <div className="signin-progress" >
        <div id="bold">본인 인증</div>
        <div> {">"} </div>
        <div>약관 동의</div>
        <div> {">"} </div>
        <div>정보 입력</div>
        <div> {">"} </div> 
        <div>가입 완료</div>
      </div>

      <div className="big-container"> 
        <h2>인증 정보 입력</h2>
        
        <div className="emailverification">
          <p style={{marginTop:"0px"}}>이름</p>
          <div>
            <input 
              type="text" 
              placeholder="이름을 입력하세요" 
              value={username}
              onChange={setUserName}
            />
          </div>
          <p>생년월일/성별</p>
          <div>
            <input 
              id="birthday" 
              type="text" 
              placeholder="내용을 입력하세요"
              value={birthday} 
              onChange={setUserBirthday}
              maxLength={6}
            />
            -
            <input 
              id="gender" 
              type="text" 
              placeholder="" 
              value={gender}
              onChange={setUserGender}
              maxLength={1}
            />
            * * * * * * *
          </div>
          <p>이메일</p>
          <div>
            <input 
              type="email" 
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={setUserEmail}
            />
          </div>
          <div className="enter50"></div>
        </div>
      
        <button className="button1" onClick={handleSendClick}>인증번호 전송</button>
      </div>
    </>
  );
};

export default VerificationInfo;