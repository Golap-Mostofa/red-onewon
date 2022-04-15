import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar/Navbar';
import Leach from './components/Leach/Leach';
import Deaner from './components/Deaner/Deaner';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
       <Route path='/lunch' element={<Leach></Leach>}></Route>
       <Route path='/deaner' element={<Deaner></Deaner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
