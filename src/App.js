import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar/Navbar';
import Leach from './components/Leach/Leach';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={}></Route> */}
       <Route path='/lunch' element={<Leach></Leach>}></Route>
      </Routes>
    </div>
  );
}

export default App;
