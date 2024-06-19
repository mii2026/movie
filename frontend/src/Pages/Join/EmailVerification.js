import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Style/Global.css";
import "../../Style/Join.css";

const EmailVerification = () => {
  // 인증번호
  const[code, setCode] = useState("");

  // 인증번호 타이머
  const initialTime = 180;
  const [time, setTime] = useState(initialTime);

  // 타이머 종료 유무
  const [send, setSend] = useState(true);
  
  // 기타
  const navigate = useNavigate();
  const location = useLocation();

  const setVerificationCode = event => {
    const value = event.target.value;
    const not = /[^0-9]/g;

    setCode(value.replace(not, ""));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        alert("인증 시간이 만료되었습니다.")
        setSend(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
    
  }, [time]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const handleSendClick = () => {
    setTime(initialTime);
    setSend(true);
  }

  const handleVerifyClick = () => {
    if(code === "123456"){
      navigate("/join/agreement", {
        state: location.state
      })
    }
    else{
      alert("유효하지 않은 인증번호입니다.");
    }
  }

  return (
    <>
      <div className="signin-progress" >
        <div id="bold">본인 인증</div>
        <div> {">"} </div>
        <div>약관 동의</div>
        <div> {">"} </div>
        <div>정보 입력</div>
        <div> {">"} </div> 
        <div>가입 완료</div>
      </div>

      <div className="big-container"> 
        <h2>이메일 인증</h2>

        <div className="emailverification">
          <div className="code-input">
            <input 
              type="text" 
              placeholder="인증 번호를 입력하세요"
              value={code} 
              onChange={setVerificationCode}
              disabled={!send}
              maxLength={6}
            />
            <span>{formatTime(time)}</span>
          </div>  
        </div>
        
        <div className="enter50"></div>
        <div className="enter50"></div>
        
        {!send ? 
        (<button className="button1" onClick={handleSendClick}>인증번호 재전송</button>) 
        : (<button className="button1" onClick={handleVerifyClick}>인증번호 확인</button>)}
      </div>
    </>
  );
};

export default EmailVerification;