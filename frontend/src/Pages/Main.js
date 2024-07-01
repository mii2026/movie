import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "../Style/Global.css"
import "../Style/Main.css"

const Main = () => {
  // 선택된 내용
  const [movie, setMovie] = useState();
  const [location, setLocation] = useState();
  const [cinema, setCinema] = useState();
  const [schedule, setSchedule] = useState();

  // 목록
  const [movies, setMovies] = useState([]);
  const [locations, setLocations] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [schedules, setSchedules] = useState([]);
 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }

    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{delay: 2500,disableOnInteraction: false}}
            pagination={{clickable: true}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

          <div className="enter50"></div>

          <div className="order">
            <h2>간편 예매</h2>
            <div className="calender"></div>
            <div className="schedule">
              <div>
                {movies.map((m, index) => 
                  <button className="button2">{m}</button>
                )}
              </div>

              <div>
                {locations.map((l, index) => 
                  <button className="button2">{l}</button>
                )}
              </div>
              
              <div>
                {cinemas.map((c, index) => 
                  <button className="button2">{c}</button>
                )}  
              </div>
                
              <div id="final">

              </div>
            </div>
            <button onClick={handleClick} className="button1">좌석 선택</button>           
          </div>
        </>
    )
};

export default Main;