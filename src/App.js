
import './App.css';
import { About, Header } from './Containers';
import Login from './Pages/AfterLoginPage/Login';
import Product from './Pages/ChickenProduct/Product';
import HomePage from "./Pages/HomePage/HomePage";
import {Routes,Route} from "react-router-dom";
import Whislist from './Pages/Whislist/Whislist';
import Payment from './Pages/Payment/Payment';
import Cate from './Pages/Categories/Cate';
import Navbar from './CSS/Navbar';

function App() {
  return (
    <div className="App">
      <div className='content-wrap'>
    <Routes>
      <Route  exact path='/' element={<HomePage />}></Route>
      <Route   path='khan' element={<Login />}></Route>
      <Route  path='/pop' element={<Product />}></Route>
      <Route path='/categories' element={<Cate />}></Route>
      <Route path='/Whislist' element={<Whislist />}></Route>
       <Route path='/Payment' element={<Payment />}></Route>
    </Routes>
  </div>

    </div>
  );
}

export default App;
