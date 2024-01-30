import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import "animate.css/animate.min.css";
import { cse } from './Event_details';
import Event from './Pages/Event';
import { createContext, useState } from 'react';

export const BlurContext = createContext()

function App() {
  const [isBlurred, setIsBlurred] = useState(false)
  return (
    <BrowserRouter>
      <BlurContext.Provider value={[isBlurred, setIsBlurred]}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cse" element={<Event data={cse}/>} />
        </Routes>
      </BlurContext.Provider>
    </BrowserRouter>
  );
}

export default App;
