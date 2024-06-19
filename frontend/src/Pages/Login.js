import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Global.css'
import '../Style/Login.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState(''); 
  const navigate = useNavigate();

  const setUserEmail = event => {
    setEmail(event.target.value);
  }

  const setUserPw = event => {
    setPw(event.target.value);
  }

  const handleLoginClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className="small-container">
        <h2>로그인</h2>

        <div className="login">
          <div>
            <input 
              className="input1"
              type="email" 
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={setUserEmail}
            />
          </div>
          <div>
            <input 
              className="input1"
              type="password" 
              placeholder="비밀번호를 입력하세요"
              value={pw}
              onChange={setUserPw}
            />
          </div>
        </div>
        
        <div>
          <button className="button1" onClick={handleLoginClick}>로그인</button>
        </div>
        <div>
          <Link to="/findpw" className="button2">비밀번호 찾기</Link>
        </div>
        <div>
          <Link to="/join/verify-info" className="button2">회원가입</Link>
        </div>
      </div>
    </>
  )
};

export default Login;
