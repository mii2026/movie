import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../Style/Global.css'
import '../../Style/Join.css';

const Register = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }
 
  return (
    <>
      <div className='signin-progress' >
        <div>본인 인증</div>
        <div> {'>'} </div>
        <div>약관 동의</div>
        <div> {'>'} </div>
        <div>정보 입력</div>
        <div> {'>'} </div> 
        <div id="bold">가입 완료</div>
      </div>

      <div className='big-container'> 
        <h2>가입이 완료되었습니다!</h2>
        <button className="button1" onClick={handleClick}>동의하고 다음으로</button>
      </div>
    </>
  );
};

export default Register;