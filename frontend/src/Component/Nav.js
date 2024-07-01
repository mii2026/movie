import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Nav.css"

const Nav = () => {
  return (
    <nav>
      <div className='logo-containers'>
        <Link to="/" className='logo'>
          <h1>Let's movies!</h1>
        </Link>
      </div>

      <div className='navlink-containers'>
        <Link to="/mypage/profile" className='navlink'>
          마이페이지
        </Link>
        <Link to="/login" className='navlink'>
          로그인
        </Link>
      </div>
    </nav>
  );
}

export default Nav;