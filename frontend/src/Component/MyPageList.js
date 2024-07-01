import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/MyPage.css'

const MyPageList = () => {
  
  const navigate = useNavigate();

  const toProfile = () => {
    navigate('/mypage/profile');
  }

  const toOrderList = () => {
    navigate('/mypage/orderlist');
  }
 
  return (
    <>
      <div className='mypagelist'>
        <h3>마이페이지</h3>
        <button className="button2" onClick={toProfile} style={{background: "none"}}>회원 정보 확인</button>
        <button className="button2" onClick={toOrderList} style={{background: "none"}}>예매 내역 확인</button>
      </div>
    </>
  );
};

export default MyPageList;