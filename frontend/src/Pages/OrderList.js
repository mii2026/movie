import React, {useState, useEffect} from 'react';
import MyPageList from "../Component/MyPageList";
import Order from "../Component/Order"
import "../Style/Global.css"
import "../Style/MyPage.css"

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    setOrderData([{
      예매번호: "123109",
      state: "이용가능",
      poster: "https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/05/PS24052700130.jpg",
      name: "콰이어트 플레이스: 첫째 날", 
      관람종류: "2D자막",
      나이제한: "19",
      영화관: "신촌점", 
      상영관: "2관", 
      좌석: ["2b", "2c"], 
      날짜: "2024.06.21", 
      시작시간: "15:00",
      종료시간: "17:00",
      결제수단: "농협카드 202909184908",
      결제금액: 26000
    }]);
  }, [orderData]);
  
  return (
    <div>
      <div className='mypage-container'>
        <MyPageList />

        <div className='mypage-body'>
          <h2>예매 내역 확인</h2>
          {orderData.length === 0 ? (
            <div>예매 이력이 없습니다.</div>
          ) : (
            <div className='orderlist-container'>
              <div className='line'></div>
              {orderData.map((order, index) =>
                <Order data={order}/>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;