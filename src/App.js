import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import "animate.css/animate.min.css";
import { aiml, cse, eee } from './Event_details';
import Event from './Pages/Event';
import { createContext, useEffect, useState } from 'react';
import Gallery from './Pages/Gallery';
import { api_key, api_secret, cloud_name } from './utils';
import axios from 'axios';

export const BlurContext = createContext()

function App() {
  const [isBlurred, setIsBlurred] = useState(false)
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/cse" element={<Event data={cse}/>} />
          <Route path="/aiml" element={<Event data={aiml}/>} />
          <Route path="/eee" element={<Event data={eee}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
