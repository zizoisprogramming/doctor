import './App.css';
import Appointment from './Components/Appointment';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Appointment" element={<Appointment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
