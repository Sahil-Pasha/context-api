import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Support from './components/Support'
import Home from './components/Home'
import { NoteState } from './Context/notes/noteState'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <div className="App">
            <div
              style={{
                backgroundColor: '#8CE194',
                margin: '0px 10px 0px 10px',
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  listStyleType: 'none',
                }}
              >
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/about-us"> About</Link>
                </li>
                <li>
                  <Link to="/contact-us"> Contact</Link>
                </li>
                <li>
                  <Link to="/support-us"> Support</Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<About />}></Route>
              <Route path="/contact-us" element={<Contact />}></Route>
              <Route path="/support-us" element={<Support />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  )
}

export default App
