import './App.css';
import Menu from './Components/Navbar/Menu/Menu';
// import Menu from './Components/Navbar/Menu/Menu';
import Portfolio from './Components/Portfolio/Portfolio';
import MyCertificates from './Components/MyCertificates/MyCertificates';
// import Footer from './Components/Footer/Footer';
// import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
// import Loader from './Components/Loader/Loader';
// import About from './Components/About/About';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route exact  path='/menu' element={<Menu key="/menu"/>} />
      <Route exact  path='/' element={<Home key="/home"/>} />
      <Route exact  path='/resume' element={<Resume key="/resume"/>} />
      <Route exact  path='/certificates' element={<MyCertificates key="/certificates"/>} />
      <Route exact  path='/portfolio' element={<Portfolio key="/portfolio"/>} />
      <Route exact  path='/contact' element={<Contact key="/contact"/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
