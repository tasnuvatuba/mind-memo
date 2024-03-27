
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from "./Pages/CalendarPage";
import { EmotionsPage } from "./Pages/EmotionsPage";
import { HomePage } from "./Pages/HomePage";
import { MediaPage } from "./Pages/MediaPage";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Journal } from 'react-bootstrap-icons';
import Sidebar from "./Components/Sidebar/Sidebar";
import {DrawerAppBar} from "./Components/Appbar/DrawerAppBar";

function App() {

  return (
  <div className='background'>
    <div>
    {/* <DrawerAppBar/> */}
    <Sidebar/>
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/emotions" element={<EmotionsPage />} />
    </Routes> 
      

    </div>
    
    
  </div>
    
    
  );
}

export default App;
