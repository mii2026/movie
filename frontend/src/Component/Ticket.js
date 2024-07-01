import React from 'react';
import qrcode from '../img/qrcode.png'
import "../Style/Global.css"
import "../Style/MyPage.css"

const Ticket = ({data, onClose}) => {
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
          <img src={qrcode} className='qrcode' />
          <b>({data.나이제한}) {data.name}</b>
          <div>{data.날짜} {data.시작시간}~{data.종료시간}</div>
          <div>{data.영화관} {data.상영관} / {data.좌석}</div>
        </div>
      </div>
    </div>
  )
};

export default Ticket;