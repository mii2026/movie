import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Global.css'
import '../Style/Signin.css';

const MemberInfo = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/join/register')
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

      <div className='signin-container'> 
        <h2>회원 정보 입력</h2>

        <div className='memberinfo'>
          <p>이름 *</p>
          <div>
            <input type="text" placeholder="이름을 입력하세요"/>
          </div>
          
          <p>이메일 *</p>
          <div>
            <input type="email" placeholder="이메일을 입력하세요"/>
          </div>
          
          <p>비밀번호 *</p>
          <div>
            <input type="password" placeholder="인증 번호를 입력하세요" />
          </div>
          <div>
            <input type="password" placeholder="인증 번호를 입력하세요" />
          </div>
          
          <p>생년월일 *</p>
          <div>
            <input type="text" placeholder="인증 번호를 입력하세요" />
          </div>
        </div>

        <div className='enter50'></div>
        
        <button onClick={handleClick}>동의하고 다음으로</button>
      </div>
    </>
  );
};

export default MemberInfo;