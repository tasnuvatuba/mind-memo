import './App.css';
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from "./Pages/CalendarPage";
import { EmotionsPage } from "./Pages/EmotionsPage";
import { HomePage } from "./Pages/HomePage";
import { MediaPage } from "./Pages/MediaPage";
import Container from 'react-bootstrap/Container';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


function App() {
  return (
  <div>
    <Sidebar/>
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/emotions" element={<EmotionsPage />} />
    </Routes> 
    
  </div>
    
    
  );
}

export default App;
