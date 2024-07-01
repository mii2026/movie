import React, { useState } from 'react';
import OrderDetail from './OrderDetail';
import Ticket from './Ticket';
import "../Style/Global.css"
import "../Style/MyPage.css"

const Order = (props) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
  
  const handleDetailClick = () => {
    setDetailOpen(true);
  }

  const handleTicketCilck = () => {
    setTicketOpen(true);
  }

  return (
    <>
      <div className='order-container'>
        <img src={props.data.poster} className='poster' />
        <div className='order'>
          <p>{props.data.state}</p>
          <b>({props.data.나이제한}) {props.data.name} ({props.data.관람종류})</b>
          <div>{props.data.날짜} {props.data.시작시간}~{props.data.종료시간}</div>
          <div>{props.data.영화관} {props.data.상영관} / {props.data.좌석.length}좌석</div>

          <div className='enter50'></div>
          <div>
            <button className='button3' onClick={handleDetailClick}>상세 내역 보기</button>
            <button className='button3' onClick={handleTicketCilck} disabled={props.data.state!=='이용가능'}>표 확인</button>
          </div>
        </div>
      </div>
      {detailOpen && (
        <OrderDetail 
          data={props.data}
          onClose={() => {
            setDetailOpen(false);
          }}
        />
      )}  
      {ticketOpen && (
        <Ticket 
          data={props.data}
          onClose={() => {
            setTicketOpen(false);
          }}
        />
      )} 
    </>
  );
};

export default Order;