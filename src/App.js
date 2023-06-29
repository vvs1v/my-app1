import logo from './logo.svg';
// import './App.css';
import Home from "./Home.js"
import About from "./components/About"
import Cloud from "./components/Cloud"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home1 from "./components/Home1"

function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/home" element={<Home1/>} exact/>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} exact />
          <Route path="/Cloud" element={<Cloud/>} exact />
    </Routes>
      </Router>
    </>
  );
}

export default App;
