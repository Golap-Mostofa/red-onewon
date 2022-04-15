import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar/Navbar';
import Leach from './components/Leach/Leach';
import Deaner from './components/Deaner/Deaner';
import SignUp from './components/Login/Signup/SignUp';
import Main from './components/Header/Main/Main';
import Product from './components/Header/Product/Product';
import Login from './components/Login/Login/Login';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/' element={ <Product></Product>}></Route> */}
       <Route path='/lunch' element={<Leach></Leach>}></Route>
       <Route path='/deaner' element={<Deaner></Deaner>}></Route>
       <Route path='signUp' element={<SignUp></SignUp>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
