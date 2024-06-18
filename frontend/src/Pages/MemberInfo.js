import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Global.css'
import '../Style/Join.css';

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

      <div className='big-container'> 
        <h2>회원 정보 입력</h2>

        <div className='memberinfo'>
          <p style={{marginTop:"0px"}}>이름 *</p>
          <div>
            <input type="text" value="홍길동" disabled/>
          </div>
          
          <p>이메일 *</p>
          <div>
            <input type="email" value="myemail@naver.com" disabled/>
          </div>
          
          <p>비밀번호 *</p>
          <p style={{fontSize: "small"}}>(영문, 숫자, 특수문자를 조합하여 8~20자의 길이로 구성)</p>
          <div>
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          
          <p>생년월일 *</p>
          <div>
            <input type="text" value="1900.01.01" disabled/>
          </div>
        </div>

        <div className='enter50'></div>
        
        <button className="button1" onClick={handleClick}>등록하기</button>
      </div>
    </>
  );
};

export default MemberInfo;