import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Global.css'
import '../Style/Signin.css';

const Agreement = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/join/member-info')
  }

  return (
    <>
      <div className='signin-progress' >
        <div>본인 인증</div>
        <div> {'>'} </div>
        <div id="bold">약관 동의</div>
        <div> {'>'} </div>
        <div>정보 입력</div>
        <div> {'>'} </div> 
        <div>가입 완료</div>
      </div>

      <div className='signin-container'> 
        <h2>약관 동의</h2>

        <div className='agree'>
          <b>(필수) 이용약관</b>
          <div className='box'>
            안녕하세요. 약관이에요.
          </div>
          <div className='check'>
            <div>
              <input type="checkbox" name="약관 동의" className='checkbox' /> 동의합니다.
            </div>
          </div>
          <div className='enter50'></div>

          <b>(필수) 개인정보 수집 및 이용</b>
          <div className='box'>
            안녕하세요. 개인정보 수집 및 이용 동의서에요.
          </div>
          <div className='check'>
            <div>* 이용자는 개인정보 수집 및 활용에 대한 동의를 거부할 권리가 있으나, 
            미 동의시 회원가입을 하실 수 없습니다.</div>
            <div>
              <input type="checkbox" name="개인정보 동의" className='checkbox' /> 동의합니다.
            </div>
          </div>
        </div>
        <div className='enter50'></div>
        
        <button onClick={handleClick}>동의하고 다음으로</button>

      </div>
    </>
  );
};

export default Agreement;