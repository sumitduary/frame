import React from 'react'
import dynamic from "next/dynamic";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';
import Admin from '../index';
import Upload from './upload';
import Projectdata from './projectdata';
import Errorpage from '@/pages/_error';

export default dynamic(() => Promise.resolve(App), { ssr: false });
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/home/upload" element={<Upload />} />
        <Route path="/admin/home/projectdata" element={<Projectdata />} />
      

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
    </>
  )
}