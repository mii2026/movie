import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Nav from "./Component/Nav";
import Login from './Pages/Login';
import Main from './Pages/Main';
import Signin from './Pages/Signin';
import Findpw from './Pages/Findpw';
import MyPage from './Pages/MyPage';
import OrderList from './Pages/OrderList';
import NotFound from './Notfound';

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/findpw' element={<Findpw />}></Route>
          <Route path='/mypage' element={<MyPage />}></Route>
          <Route path='/orderlist' element={<OrderList />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
