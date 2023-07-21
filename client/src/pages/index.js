import React from 'react'
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './home';
import About from './about';
import Contact from './contact';
import Digitalart from './digitalart';
import Photography from './photography';
import Feedback from './feedback';


import Errorpage from './_error';
import Admin from './admin';


export default dynamic(() => Promise.resolve(App), { ssr: false });
const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/website" />
        <Route path="/graphic" />
        <Route path="/digitalart" element={<Digitalart />} />
        <Route path="/photography" element={<Photography />} />
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
    </>
  )
}
