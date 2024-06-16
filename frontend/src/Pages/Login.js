import React from "react";
import { Link } from 'react-router-dom';
import '../Style/Login.css';

const Login = () => {
    return (
      <>
        <div className="login-container">
          <h2>로그인</h2>

          <div>
            <input type="email" placeholder="이메일을 입력하세요"/>
          </div>
          <div>
            <input type="password" placeholder="비밀번호를 입력하세요"/>
          </div>
          
          <div>
            <button className="button1">로그인</button>
          </div>
          <div>
            <Link to="/findpw" className="button2">비밀번호 찾기</Link>
          </div>
          <div>
            <Link to="/signin" className="button2">회원가입</Link>
          </div>
        </div>
      </>
    )
};

export default Login;
