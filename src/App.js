import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import "animate.css/animate.min.css";
import { aiml, civil, cse, ece, eee, mca, me } from './Event_details';
import Event from './Pages/Event';
import { createContext, useEffect, useState } from 'react';
import Gallery from './Pages/Gallery';


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
          <Route path="/civil" element={<Event data={civil}/>} />
          <Route path="/me" element={<Event data={me}/>} />
          <Route path="/ece" element={<Event data={ece}/>} />
          <Route path="/mca" element={<Event data={mca}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
