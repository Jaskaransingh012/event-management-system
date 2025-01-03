import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from './Pages/EventPage'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/event" element={<EventPage/>} />
          {/* <Route path="/vite" element={<VitePage />} /> */}
          <Route path="*" element={<>Page Not Found</>} />

        </Routes>
      </>
    </BrowserRouter>
  );
}


export default App
