import React, { useState } from 'react';
import MyPageList from '../Component/MyPageList';
import "../Style/Global.css"
import "../Style/MyPage.css"

const Profile = () => {
  const [username, setName] = useState("홍길동");
  const [birthday, setBirtyday] = useState("20000101");
  const [email, setEmail] = useState("myemail@gmail.com");

  // 비밀번호 확인 메시지
  const [pwMessage, setPwMessage] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");

  return (
    <>

      <div className='mypage-container'>
        <MyPageList />

        <div className='container'>
          <div className='container2'>
            <h2>회원 정보 확인</h2>
            <div class="info">
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
            <div class="info">
              <div style={{marginBottom:"15px"}}>이름</div>
              <div>
                <input type="password" placeholder="기존 비밀번호를 입력하세요."/>
              </div>
              
              <p>새 비밀번호</p>
              <div>
                <input type="password" placeholder="새 비밀번호를 입력하세요."/>
              </div>
              <div className="check-message">{pwMessage}</div>
              
              <p>새 비밀번호 확인</p>
              <div>
                <input type="password" placeholder="새 비밀번호를 재입력하세요."/>
              </div>
              <div className="check-message">{pwCheckMessage}</div>
            </div>
          </div>
          
          <div className='enter50'></div>
          <button className='button1'>비밀번호 변경</button>
          <button className='button2'>회원 탈퇴</button>
        </div>
      </div>
    </>
  );
};

export default Profile;