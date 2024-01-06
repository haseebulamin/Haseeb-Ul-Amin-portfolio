import './App.css';
// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
// import Contact from './Components/Contact/Contact'
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <section id='app' className="h-screen">
    <Navbar/>
    <div className="frame border-2 border-round-3xl  mx-3 mb-3 mt-2 "> 
    {/* <Home/> */}
    {/* <Contact/> */}
    {/* <About/> */}
    <Resume/>
    </div>
    </section>
  );
}

export default App;
