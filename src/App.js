
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from "./Pages/CalendarPage";
import { HomePage } from "./Pages/HomePage";
import { AboutPage} from "./Pages/AboutPage";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Journal } from 'react-bootstrap-icons';
import {DrawerAppBar} from "./Components/Appbar/DrawerAppBar";

function App() {

  return (
  <div className='background'>
    <div>
    <DrawerAppBar/>
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes> 
      

    </div>
    
    
  </div>
    
    
  );
}

export default App;
