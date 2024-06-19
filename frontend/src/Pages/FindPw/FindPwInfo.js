import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../Style/Global.css'
import '../../Style/FindPw.css';

const FindPwInfo= () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/findpw/send-pw')
  }

  return (
    <>
      <div className='enter50'></div>

      <div className='big-container'> 
        <h2>인증 정보 입력</h2>
        
        <div className='findpw'>
          <div style={{marginBottom:"15px"}}>이름</div>
          <div>
            <input type="text" placeholder="이름을 입력하세요"/>
          </div>
          <p>생년월일</p>
          <div>
            <input type="text" placeholder="생년월일을 입력하세요 (ex: 19000101)" />
          </div>
          <p>이메일</p>
          <div>
            <input type="email" placeholder="이메일을 입력하세요"/>
          </div>
          <div className='enter50'></div>
        </div>

        <button className="button1" onClick={handleClick}>임시 비밀번호 발송</button>
      </div>
    </>
  );
};

export default FindPwInfo;