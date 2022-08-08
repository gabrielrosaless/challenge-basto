import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Animals } from './pages/Animals';
import { createTheme,  ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#95B147',
    },
    secondary: {
      main: '#BACC88',
    },
    gray:{
      main:'gray'
    }
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Animals />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}


export default App;