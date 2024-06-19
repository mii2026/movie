import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Nav from "./Component/Nav";
import Login from './Pages/Login';
import Main from './Pages/Main';
import VerificationInfo from './Pages/Join/Verificationinfo';
import EmailVerification from './Pages/Join/EmailVerification';
import Agreement from './Pages/Join/Agreement';
import MemberInfo from './Pages/Join/MemberInfo';
import Register from './Pages/Join/Register';
import FindPwInfo from './Pages/FindPw/FindPwInfo';
import SendPw from './Pages/FindPw/SendPw';
import Profile from './Pages/Profile';
import OrderList from './Pages/OrderList';
import NotFound from './Pages/Notfound';

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join/verify-info' element={<VerificationInfo />}></Route>
          <Route path='/join/verify-email' element={<EmailVerification />}></Route>
          <Route path='/join/agreement' element={<Agreement />}></Route>
          <Route path='/join/member-info' element={<MemberInfo />}></Route>
          <Route path='/join/register' element={<Register />}></Route>
          <Route path='/findpw/member-info' element={<FindPwInfo />}></Route>
          <Route path='/findpw/send-pw' element={<SendPw />}></Route>
          <Route path='/mypage/profile' element={<Profile />}></Route>
          <Route path='/mypage/orderlist' element={<OrderList />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
