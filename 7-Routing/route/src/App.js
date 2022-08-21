import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

//pages
import Home from "./components/Home"
import Users from "./components/Users"
import About from "./components/About"
import User from "./components/User"


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <h3><Link to="/">Home</Link></h3>
      <h3><Link to="/users">Users</Link></h3>
      <h3><Link to="/about">About</Link></h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }


export default App;