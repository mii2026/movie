import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPageList from "../Component/MyPageList";
import { confirmPw } from "../Component/Confirm";
import "../Style/Global.css"
import "../Style/MyPage.css"

const Profile = () => {
  // 회원 정보
  const [username, setName] = useState("홍길동");
  const [birthday, setBirtyday] = useState("20000101");
  const [email, setEmail] = useState("myemail@gmail.com");

  // 비밀번호
  const [oldpw, setOldpw] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  // 비밀번호 확인 메시지
  const [pwMessage, setPwMessage] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");

  const navigate = useNavigate();

  const setUserOldPw = event => {
    setOldpw(event.target.value);
  }

  const setUserPw = event => {    
    const value = event.target.value;

    setPw(value);
    if(confirmPw(value)){
      setPwMessage("사용 가능한 비밀번호입니다.");
    }
    else{
      setPwMessage("유효하지 않은 비밀번호입니다.");
    }
  }

  const setUserPwCheck = event => {
    const value = event.target.value;

    setPwCheck(value);

    if(value === pw){
      setPwCheckMessage("비밀번호와 일치합니다.");
    }
    else{
      setPwCheckMessage("비밀번호와 일치하지 않습니다.");
    }
  }

  const handleChangePw = () => {
    if(!confirmPw(pw)){
      alert("비밀번호가 형식에 맞지 않습니다.");
    }
    else if(pw !== pwCheck){
      alert("비밀번호 확인이 일치하지 않습니다.");
    }
    else{
      alert("비밀번호가 변경되었습니다.");
      setOldpw("");
      setPw("");
      setPwCheck("");
    }
  }

  const handleWithdrawl = () => {
    if(window.confirm("탈퇴하시겠습니까?")){
      alert("탈퇴되었습니다. 30일 이내에 고객센터를 통해 복구가 가능합니다.");
      navigate("/");
    } else{
      alert("취소되었습니다.");
    }
  }

  return (
    <>
      <div className='mypage-container'>
        <MyPageList />

        <div className='mypage-body'>
          <div className='profile'>
            <h2>회원 정보 확인</h2>
            <div>
              <div style={{marginBottom:"15px"}}>이름</div>
              <div>
                <input type="text" value={username} disabled/>
              </div>
              <p>생년월일</p>
              <div>
                <input type="text" value={birthday} disabled/>
              </div>
              <p>이메일</p>
              <div>
                <input type="email" value={email} disabled/>
              </div>
              <div className='enter50'></div>
            </div>

            <h2>비밀번호</h2>
            <div>
              <div style={{marginBottom:"15px"}}>이름</div>
              <div>
                <input 
                  type="password" 
                  placeholder="기존 비밀번호를 입력하세요."
                  value={oldpw}
                  onChange={setUserOldPw}
                  maxLength={20}
                />
              </div>
              
              <p>새 비밀번호</p>
              <p style={{fontSize: "small"}}>(영문, 숫자, 특수문자를 조합하여 8~20자의 길이로 구성)</p>
              <div>
                <input 
                  type="password" 
                  placeholder="새 비밀번호를 입력하세요."
                  value={pw}
                  onChange={setUserPw}
                  maxLength={20}
                />
              </div>
              <div className="check-message">{pwMessage}</div>
              <div>
                <input 
                  type="password" 
                  placeholder="새 비밀번호를 재입력하세요."
                  value={pwCheck}
                  onChange={setUserPwCheck}
                  maxLength={20}
                />
              </div>
              <div className="check-message">{pwCheckMessage}</div>
            </div>
          </div>
          
          <div className='enter50'></div>
          <button className='button1' onClick={handleChangePw}>비밀번호 변경</button>
          <button className='button2' onClick={handleWithdrawl}>회원 탈퇴</button>
        </div>
      </div>
    </>
  );
};

export default Profile;