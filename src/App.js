import './App.css';
import Services from './Components/Services/Services';
import Menu from './Components/Navbar/Menu/Menu';
import Portfolio from './Components/Portfolio/Portfolio';
import MyCertificates from './Components/MyCertificates/MyCertificates';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
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
      <Route exact  path='/services' element={<Services key="/services"/>} />
      <Route exact  path='/contact' element={<Contact key="/contact"/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
