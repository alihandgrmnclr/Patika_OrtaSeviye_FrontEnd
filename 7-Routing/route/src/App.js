import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'
import Error from './components/Error'
import User from "./components/User"


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            {/* Buradaki elementler bir sayfayı temsil ediyor. Şart hangisine uyuyorsa onu çalıştırır. */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/*" element={<Users />}> {/* Nested yani iç içe route için başlangıçta bu yapıyı kullanmamız gerekiyor */}
              <Route path=':id' element={<User />} />
            </Route>
            <Route path='*' element={<Error />} />  {/* Var olmayan bir sayfa açılırsa error sayfası gelecek */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}




export default App;