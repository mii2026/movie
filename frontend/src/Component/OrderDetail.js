import React from 'react';
import "../Style/Global.css"
import "../Style/MyPage.css"

const OrderDetail = ({data, onClose}) => {
  const handleCloseClick = () => {
    onClose();
  }

  const handleCancleClick = () => {
    alert("예약이 취소되었습니다.");
  }

  return(
    <div className='overlay'>
      <div className='order-detail-mordal'>
        <button onClick={handleCloseClick} className='close-button'>x</button>
        
        <div className='order-detail'>
          <h2>예매내역</h2>
          <div className='line'></div>

          <h3>{data.name}</h3>
          <p>예매번호 {data.예매번호}</p>
          <p>상영일시 {data.날짜} {data.시작시간}~{data.종료시간}</p>
          <p>상영관 {data.영화관} {data.상영관}</p>
          <p>관람인원 </p>
          <p>좌석 {data.좌석}</p>
          
          <div className='line'></div>

          <p>총 결제금액 {data.결제금액}원</p>
          <p>{data.결제수단}</p>
          <div className='line'></div>

          <button className='button1' onClick={handleCancleClick} disabled={data.state!=="이용가능"}>결제취소</button>
          <div style={{background:"lightgray", borderRadius:"4px", padding:"10px", margin:"10px", width:"500px", marginBottom:"20px"}}>
            <li>영화 시작 전까지 환불이 가능하며, 시간에 따라 환불 수수료가 발생할 수 있습니다.</li>
            <li>영화 시작 하루 전까지는 전액 환불 가능합니다.</li>
            <li>영화 시작 한 시간 이전부터 15%의 수수료가 발생합니다.</li>
          </div>
        </div>
      </div>
    </div>
  )
};

export default OrderDetail;