import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Router>
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
      {/* <Footer /> */}
    </div>
  )
}
