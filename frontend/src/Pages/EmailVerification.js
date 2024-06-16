import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Global.css'
import '../Style/Signin.css';

const EmailVerification = () => {
  
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

      <div className='signin-container'> 
        <h2>인증 정보 입력</h2>
        
        <div className='emailverification'>
          <div>
            <input type="text" placeholder="이름을 입력하세요"/>
          </div>
          <div>
            <input id="birthday" type="text" placeholder="내용을 입력하세요"/>
            -
            <input id="gender" type="text" placeholder=""/>
            * * * * * * *
          </div>
          <div>
            <input type="email" placeholder="이메일을 입력하세요"/>
          </div>
          <div>
            <input type="text" placeholder="인증 번호를 입력하세요" />
          </div>
          
          <button onClick={handleClick}>동의하고 다음으로</button>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;