import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../Style/Global.css'
import '../../Style/Join.css';

const SendPw = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }
 
  return (
    <>
      <div className='enter50'></div>
      
      <div className='big-container'> 
        <h2>등록하신 이메일로 임시 비밀번호가 전송되었습니다.</h2>
        <button className="button1" onClick={handleClick}>로그인 창으로 돌아가기</button>
      </div>
    </>
  );
};

export default SendPw;