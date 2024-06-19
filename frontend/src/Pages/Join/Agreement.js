import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Style/Global.css'
import '../../Style/Join.css';

const Agreement = () => {
  const [agreeTerms, SetAgreeTerms] = useState(false);
  const [agreeInfo, SetAgreeInfo] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAgreeTerms = event => {
    SetAgreeTerms(!agreeTerms);
  }

  const handleAgreeInfo = event => {
    SetAgreeInfo(!agreeInfo);
  }

  const handleNextClick = () => {
    if(!agreeTerms){
      alert("약관에 동의해주세요");
    }
    else if(!agreeInfo){
      alert("개인정보 수집 및 이용에 동의해주세요.");
    }
    else{
      navigate('/join/member-info', {
        state: location.state
      })
    } 
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

      <div className='big-container'> 
        <h2>약관 동의</h2>

        <div className='agree'>
          <b>(필수) 이용약관</b>
          <div className='box'>
            안녕하세요. 약관이에요.
          </div>
          <div className='check'>
            <div>
              <input 
                type='checkbox' 
                className='checkbox' 
                checked={agreeTerms}
                onChange={handleAgreeTerms}
              /> 
              동의합니다.
            </div>
          </div>
          <div className='enter50'></div>

          <b>(필수) 개인정보 수집 및 이용</b>
          <div className='box'>
            안녕하세요. 개인정보 수집 및 이용 동의서에요.
          </div>
          <div className='check'>* 이용자는 개인정보 수집 및 활용에 대한 동의를 거부할 권리가 있으나, 
          미 동의시 회원가입을 하실 수 없습니다.
          </div>
          <div className='check'>
            <input 
              type='checkbox' 
              className='checkbox' 
              checked={agreeInfo}
              onChange={handleAgreeInfo}
            /> 
            동의합니다.
          </div>
        </div>
        <div className='enter50'></div>
        
        <button className="button1" onClick={handleNextClick}>동의하고 다음으로</button>

      </div>
    </>
  );
};

export default Agreement;