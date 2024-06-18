import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Global.css'
import '../Style/Join.css';

const EmailVerification = () => {
  
  const [check, setCheck] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/join/agreement')
  }

  return (
    <>
    <div className='signin-progress' >
      <div id='bold'>본인 인증</div>
      <div> {'>'} </div>
      <div>약관 동의</div>
      <div> {'>'} </div>
      <div>정보 입력</div>
      <div> {'>'} </div> 
      <div>가입 완료</div>
    </div>

    <div className='big-container'> 
      <h2>인증 정보 입력</h2>
      
      <div className='emailverification'>
        <div style={{marginBottom:"15px"}}>이름</div>
        <div>
          <input type="text" placeholder="이름을 입력하세요"/>
        </div>
        <p>생년월일/성별</p>
        <div>
          <input id="birthday" type="text" placeholder="내용을 입력하세요"/>
          <b>-</b>
          <input id="gender" type="text" placeholder=""/>
          <b>* * * * * * *</b>
        </div>
        <p>이메일</p>
        <div>
          <input type="email" placeholder="이메일을 입력하세요"/>
        </div>
        <p>인증번호</p>
        <div>
          <input type="text" placeholder="인증 번호를 입력하세요" disabled/>
        </div>  
        <div className='enter50'></div>
      </div>
      
      {!check ? 
      (<button className="button1" onClick={handleClick}>인증번호 전송</button>) 
      : (<button className="button1" onClick={handleClick}>인증번호 확인</button>)}
    </div>
  </>
  );
};

export default EmailVerification;