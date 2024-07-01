import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { confirmPw } from "../../Component/Confirm";
import '../../Style/Global.css'
import '../../Style/Join.css';

const MemberInfo = () => {
  // 사용자 정보
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  // 비밀번호 확인 메시지
  const [pwMessage, setPwMessage] = useState(" ");
  const [pwCheckMessage, setPwCheckMessage] = useState(" ");

  // 기타
  const navigate = useNavigate();
  const location = useLocation();

  const setUserPw = event => {    
    const value = event.target.value;

    setPw(value);
    if(confirmPw(value)){
      setPwMessage("사용 가능한 비밀번호입니다.");
    }
    else{
      setPwMessage("유효하지 않은 비밀번호입니다.");
    }
  }

  const setUserPwCheck = event => {
    const value = event.target.value;

    setPwCheck(value);

    if(value === pw){
      setPwCheckMessage("비밀번호와 일치합니다.");
    }
    else{
      setPwCheckMessage("비밀번호와 일치하지 않습니다.");
    }
  }

  const handleClick = () => {
    if(!confirmPw(pw)){
      alert("비밀번호가 형식에 맞지 않습니다.");
    }
    else if(pw !== pwCheck){
      alert("비밀번호 확인이 일치하지 않습니다.");
    }
    else{
      navigate('/join/register')
    }
  }
  
  return (
    <>
      <div className='signin-progress' >
        <div>본인 인증</div>
        <div> {'>'} </div>
        <div>약관 동의</div>
        <div> {'>'} </div>
        <div id="bold">정보 입력</div>
        <div> {'>'} </div> 
        <div>가입 완료</div>
      </div>

      <div className='big-container'> 
        <h2>회원 정보 입력</h2>

        <div className='memberinfo'>
          <p style={{marginTop:"0px"}}>이름 *</p>
          <div>
            <input type="text" value={location.state.username} disabled/>
          </div>
          
          <p>이메일 *</p>
          <div>
            <input type="email" value={location.state.email} disabled/>
          </div>
          
          <p>비밀번호 *</p>
          <p style={{fontSize: "small", marginTop: "0px"}}>(영문, 숫자, 특수문자를 조합하여 8~20자의 길이로 구성)</p>
          <div>
            <input 
              type="password" 
              placeholder="비밀번호를 입력하세요" 
              maxLength={20}
              value={pw}
              onChange={setUserPw}
            />
          </div>
          <div className="check-message">{pwMessage}</div>
          <div>
            <input 
              type="password" 
              placeholder="비밀번호를 입력하세요" 
              maxLength={20}
              value={pwCheck}
              onChange={setUserPwCheck}
            />
          </div>
          <div className="check-message">{pwCheckMessage}</div>
          
          <p>생년월일 *</p>
          <div>
            <input type="text" value={location.state.birthday} disabled/>
          </div>
        </div>

        <div className='enter50'></div>
        
        <button className="button1" onClick={handleClick}>등록하기</button>
      </div>
    </>
  );
};

export default MemberInfo;