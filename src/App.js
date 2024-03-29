
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CalendarPage } from "./Pages/CalendarPage";
import { HomePage } from "./Pages/HomePage";
import { AboutPage} from "./Pages/AboutPage";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Journal } from 'react-bootstrap-icons';
import {DrawerAppBar} from "./Components/Appbar/DrawerAppBar";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


function App() {
  const tealTheme = createTheme({
    palette: {
      primary: {
        main: '#0097a7', // Replace with your desired teal shade (hex code)
      },
    },
  });

  return (
  <ThemeProvider theme={tealTheme}>
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
  </ThemeProvider>
    
    
  );
}

export default App;
