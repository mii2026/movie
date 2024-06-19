import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../Style/Global.css'
import '../../Style/FindPw.css';

const FindPwInfo= () => {
  // 사용자 정보
  const [username, setName] = useState("");
  const[birthday, setBirthday] = useState("");
  const[email, setEmail] = useState("");
  
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

  const setUserEmail = event => {
    setEmail(event.target.value);
  }

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
            <input 
              type="text" 
              placeholder="이름을 입력하세요"
              value={username}
              onChange={setUserName}
            />
          </div>
          <p>생년월일</p>
          <div>
            <input 
              type="text" 
              placeholder="생년월일을 입력하세요 (ex: 19000101)" 
              value={birthday}
              onChange={setUserBirthday}
              maxLength={8}  
            />
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
          <div className='enter50'></div>
        </div>

        <button className="button1" onClick={handleClick}>임시 비밀번호 발송</button>
      </div>
    </>
  );
};

export default FindPwInfo;